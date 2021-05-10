<?php

header('Content-Type: application/json');

require __dir__ . '/../db.inc.php';
require __dir__ . '/../utils/jwt.php';
$configs = require __dir__ . '/../config.php';

// POST parameters missing
if (!isset($_POST['url'], $_POST['jwt']) || !$_POST['url'] || !$_POST['jwt']) {
  echo json_encode([
    'error' => 'Missing required POST parameters!',
  ]);
  exit();
}

$url = $_POST['url'];
$jwt = $_POST['jwt'];
$user = decodeJwtToken($jwt);

// JWT token is not valid
if ($user === NULL) {
  echo json_encode([
    'error' => 'You are not logged in!',
  ]);
  exit();
}

$username = $user['username'];

// Prepared statement for insertion
$sql = 'DELETE FROM images WHERE url=? AND username=?';
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

mysqli_stmt_bind_param($stmt, 'ss', $url, $username);
$result = mysqli_stmt_execute($stmt);

if (mysqli_affected_rows($result) != 0) {
  echo json_encode([
    'success' => 'Successfully deleted: ' . $url,
  ]);
  die();
} else {
  echo json_encode([
    'error' => 'You do not have access to that resource',
  ]);
  die();
}
