<?php
declare(strict_types=1);

require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['message' => 'Metode tidak didukung.']);
}

$body = read_json_body();
$userId = trim((string)($body['userId'] ?? ''));
$progress = $body['progress'] ?? null;

if ($userId === '' || !is_array($progress)) {
    json_response(400, ['message' => 'Data progres tidak lengkap.']);
}

$db = infora_db();
$save = $db->prepare('
    INSERT INTO progress (user_id, progress_json, updated_at)
    VALUES (:user_id, :progress_json, :updated_at)
    ON CONFLICT(user_id) DO UPDATE SET
        progress_json = excluded.progress_json,
        updated_at = excluded.updated_at
');

$save->execute([
    'user_id' => $userId,
    'progress_json' => json_encode($progress),
    'updated_at' => date('c'),
]);

json_response(200, ['message' => 'Progres tersimpan.']);

