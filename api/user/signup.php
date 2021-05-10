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

// Username is not correct length
if (strlen($username) < 4 || strlen($username) > 50) {
  echo json_encode([
    'error' => 'Username should be 4-50 characters long'
  ]);
  exit();
}

// Username is only numeric
if (is_numeric($username)) {
  echo json_encode([
    'error' => 'Username cannot be entirely numeric'
  ]);
  exit();
}

// Username is not alphanumeric
if (!ctype_alnum($username)) {
  echo json_encode([
    'error' => 'Username can only contain alphanumeric characters'
  ]);
  exit();
}

// Password is not correct length
if (strlen($password) < 4 || strlen($password) > 50) {
  echo json_encode([
    'error' => 'Password should be 4-50 characters long'
  ]);
  exit();
}

// Prepared statement (select)
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

// User already exists
if ($rowCount === 1) {
  echo json_encode([
    'error' => 'Username already taken'
  ]);
  exit();
}

// Prepared statement (insert)
$sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
mysqli_stmt_bind_param($stmt, 'ss', $username, $hashedPassword);
mysqli_stmt_execute($stmt);

// Create JWT token and return
$jwt = createJwtToken($username, $username);
echo json_encode([
  'jwt' => $jwt,
]);
exit();
