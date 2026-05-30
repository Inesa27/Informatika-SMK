<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['message' => 'Metode tidak didukung.']);
}

$body = read_json_body();
$email = strtolower(trim((string)($body['email'] ?? '')));

$db = infora_db();
$findUser = $db->prepare('SELECT id, email FROM users WHERE lower(email) = lower(:email)');
$findUser->execute(['email' => $email]);
$user = $findUser->fetch(PDO::FETCH_ASSOC);

if ($user) {
    $code = (string)random_int(100000, 999999);
    $insert = $db->prepare('INSERT INTO password_resets (id, user_id, code, created_at) VALUES (:id, :user_id, :code, :created_at)');
    $insert->execute([
        'id' => random_id(),
        'user_id' => $user['id'],
        'code' => $code,
        'created_at' => date('c'),
    ]);

    json_response(200, ['message' => 'Kode reset demo untuk ' . $user['email'] . ': ' . $code]);
}

json_response(200, ['message' => 'Jika email terdaftar, kode reset demo akan dibuat.']);

