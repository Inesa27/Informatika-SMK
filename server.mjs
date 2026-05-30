import { createHash, randomBytes, randomUUID } from 'node:crypto';
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const dataDir = join(root, 'data');
const dbPath = join(dataDir, 'infora.sqlite');
const types = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

mkdirSync(dataDir, { recursive: true });

const db = new DatabaseSync(dbPath);
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS progress (
    user_id TEXT PRIMARY KEY,
    progress_json TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS password_resets (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    code TEXT NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

const statements = {
  createUser: db.prepare('INSERT INTO users (id, name, email, password_hash, created_at) VALUES (?, ?, ?, ?, ?)'),
  findUserByEmail: db.prepare('SELECT id, name, email, password_hash FROM users WHERE lower(email) = lower(?)'),
  getProgress: db.prepare('SELECT progress_json FROM progress WHERE user_id = ?'),
  saveProgress: db.prepare(`
    INSERT INTO progress (user_id, progress_json, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(user_id) DO UPDATE SET
      progress_json = excluded.progress_json,
      updated_at = excluded.updated_at
  `),
  createReset: db.prepare('INSERT INTO password_resets (id, user_id, code, created_at) VALUES (?, ?, ?, ?)'),
};

function now() {
  return new Date().toISOString();
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

function hashPassword(password, salt = randomBytes(16).toString('hex')) {
  const hash = createHash('sha256').update(`${salt}:${password}`).digest('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, storedHash) {
  const [salt, hash] = storedHash.split(':');
  return hashPassword(password, salt) === `${salt}:${hash}`;
}

function getSavedProgress(userId) {
  const row = statements.getProgress.get(userId);
  if (!row) return null;

  try {
    return JSON.parse(row.progress_json);
  } catch {
    return null;
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json',
  });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error('Payload terlalu besar.'));
      }
    });
    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error('Format JSON tidak valid.'));
      }
    });
    request.on('error', reject);
  });
}

async function handleApi(request, response, url) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { message: 'Metode tidak didukung.' });
    return;
  }

  const body = await readBody(request);

  if (url.pathname === '/api/register') {
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');

    if (!name || !email || password.length < 4) {
      sendJson(response, 400, { message: 'Nama, email, dan password minimal 4 karakter wajib diisi.' });
      return;
    }

    if (statements.findUserByEmail.get(email)) {
      sendJson(response, 409, { message: 'Email sudah terdaftar. Silakan login.' });
      return;
    }

    const user = {
      id: randomUUID(),
      name,
      email,
      password_hash: hashPassword(password),
    };
    statements.createUser.run(user.id, user.name, user.email, user.password_hash, now());
    sendJson(response, 201, {
      message: 'Akun berhasil dibuat.',
      user: publicUser(user),
      progress: null,
    });
    return;
  }

  if (url.pathname === '/api/login') {
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const user = statements.findUserByEmail.get(email);

    if (!user || !verifyPassword(password, user.password_hash)) {
      sendJson(response, 401, { message: 'Email atau password tidak sesuai.' });
      return;
    }

    sendJson(response, 200, {
      message: 'Login berhasil.',
      user: publicUser(user),
      progress: getSavedProgress(user.id),
    });
    return;
  }

  if (url.pathname === '/api/forgot-password') {
    const email = String(body.email || '').trim().toLowerCase();
    const user = statements.findUserByEmail.get(email);

    if (user) {
      const code = String(Math.floor(100000 + Math.random() * 900000));
      statements.createReset.run(randomUUID(), user.id, code, now());
      sendJson(response, 200, {
        message: `Kode reset demo untuk ${user.email}: ${code}`,
      });
      return;
    }

    sendJson(response, 200, {
      message: 'Jika email terdaftar, kode reset demo akan dibuat.',
    });
    return;
  }

  if (url.pathname === '/api/progress') {
    const userId = String(body.userId || '').trim();
    const progress = body.progress || null;

    if (!userId || !progress) {
      sendJson(response, 400, { message: 'Data progres tidak lengkap.' });
      return;
    }

    statements.saveProgress.run(userId, JSON.stringify(progress), now());
    sendJson(response, 200, { message: 'Progres tersimpan.' });
    return;
  }

  sendJson(response, 404, { message: 'Endpoint API tidak ditemukan.' });
}

async function requestHandler(request, response) {
  const url = new URL(request.url || '/', `http://127.0.0.1:${port}`);

  try {
    if (url.pathname.startsWith('/api/')) {
      await handleApi(request, response, url);
      return;
    }

    const safePath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
    let filePath = join(root, safePath === '/' ? 'index.html' : safePath);

    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = join(root, 'index.html');
    }

    response.writeHead(200, {
      'Content-Type': types[extname(filePath)] || 'application/octet-stream',
    });
    createReadStream(filePath).pipe(response);
  } catch (error) {
    sendJson(response, 500, { message: error.message || 'Terjadi kesalahan server.' });
  }
}

function listen(candidatePort, attemptsLeft = 20) {
  const server = createServer(requestHandler);

  server.once('error', (error) => {
    if (error.code === 'EADDRINUSE' && attemptsLeft > 0) {
      listen(candidatePort + 1, attemptsLeft - 1);
      return;
    }

    throw error;
  });

  server.listen(candidatePort, '127.0.0.1', () => {
    const address = server.address();
    console.log(`Infora running at http://127.0.0.1:${address.port}`);
    console.log(`SQLite database: ${dbPath}`);
  });
}

listen(port);
