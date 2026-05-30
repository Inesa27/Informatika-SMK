<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['message' => 'Metode tidak didukung.']);
}

$body = read_json_body();
$email = strtolower(trim((string)($body['email'] ?? '')));
$password = (string)($body['password'] ?? '');

$db = infora_db();
$findUser = $db->prepare('SELECT id, name, email, password_hash FROM users WHERE lower(email) = lower(:email)');
$findUser->execute(['email' => $email]);
$user = $findUser->fetch(PDO::FETCH_ASSOC);

if (!$user || !verify_password_infora($password, (string)$user['password_hash'])) {
    json_response(401, ['message' => 'Email atau password tidak sesuai.']);
}

$findProgress = $db->prepare('SELECT progress_json FROM progress WHERE user_id = :user_id');
$findProgress->execute(['user_id' => $user['id']]);
$progressRow = $findProgress->fetch(PDO::FETCH_ASSOC);
$progress = null;

if ($progressRow) {
    $decoded = json_decode((string)$progressRow['progress_json'], true);
    $progress = is_array($decoded) ? $decoded : null;
}

json_response(200, [
    'message' => 'Login berhasil.',
    'user' => public_user($user),
    'progress' => $progress,
]);

