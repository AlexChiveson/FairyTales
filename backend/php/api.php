<?php
// Lightweight placeholder endpoint for PHP hosting.
// Validates honeypot and echoes JSON. Real email/Sheets integration can be added later.
header('Content-Type: application/json');
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid JSON']);
  exit;
}
if (!empty($body['website'])) {
  echo json_encode(['ok' => true, 'bot' => true]);
  exit;
}
// TODO: implement SMTP + Google Sheets sync (via Sheets API) with env secrets.
echo json_encode(['ok' => true]);
