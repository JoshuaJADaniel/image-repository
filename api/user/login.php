<?php

header('Content-Type: application/json');

require_once __dir__ . '/../db.inc.php';
require __dir__ . '/../vendor/autoload.php';
require __dir__ . '/../utils/jwt.php';

use \Firebase\JWT\JWT;

// POST parameters not correct
if (!isset($_POST['username'], $_POST['password'])) {
  error_log('Missing required POST parameters');
  exit();
}

$username = $_POST['username'];
$password = $_POST['password'];

// Prepared statement
$sql = 'SELECT * FROM users where username=?';
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

mysqli_stmt_bind_param($stmt, 's', $username);
mysqli_stmt_execute($stmt);

// Get results
$result = mysqli_stmt_get_result($stmt);
$rowCount = mysqli_num_rows($result);

// User does not exist
if ($rowCount == 0) {
  echo json_encode([
    'error' => 'Incorrect username or password'
  ]);
  exit();
}

// Password does not match
$row = mysqli_fetch_assoc($result);
if (!password_verify($password, $row['password'])) {
  echo json_encode([
    'error' => 'Incorrect username or password',
  ]);
  exit();
}

// Create JWT token and return
$jwt = createJwtToken($username, $username);
echo json_encode([
  'jwt' => $jwt,
]);
exit();
