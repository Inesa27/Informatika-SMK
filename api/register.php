<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['message' => 'Metode tidak didukung.']);
}

$body = read_json_body();
$name = trim((string)($body['name'] ?? ''));
$email = strtolower(trim((string)($body['email'] ?? '')));
$password = (string)($body['password'] ?? '');

if ($name === '' || $email === '' || strlen($password) < 4) {
    json_response(400, ['message' => 'Nama, email, dan password minimal 4 karakter wajib diisi.']);
}

$db = infora_db();
$check = $db->prepare('SELECT id FROM users WHERE lower(email) = lower(:email)');
$check->execute(['email' => $email]);

if ($check->fetch()) {
    json_response(409, ['message' => 'Email sudah terdaftar. Silakan login.']);
}

$user = [
    'id' => random_id(),
    'name' => $name,
    'email' => $email,
];

$insert = $db->prepare('INSERT INTO users (id, name, email, password_hash, created_at) VALUES (:id, :name, :email, :password_hash, :created_at)');
$insert->execute([
    'id' => $user['id'],
    'name' => $user['name'],
    'email' => $user['email'],
    'password_hash' => hash_password_infora($password),
    'created_at' => date('c'),
]);

json_response(201, [
    'message' => 'Akun berhasil dibuat.',
    'user' => public_user($user),
    'progress' => null,
]);

