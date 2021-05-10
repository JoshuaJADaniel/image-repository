<?php

header('Content-Type: application/json');

require __dir__ . '/../db.inc.php';
require __dir__ . '/../utils/jwt.php';

// GET parameters missing
if (!isset($_GET['jwt'], $_GET['access'])) {
  echo json_encode([]);
  exit();
}

$jwt = $_GET['jwt'];
$access = $_GET['access'];
$token = decodeJwtToken($jwt);

if ($access !== 'public' && $access !== 'private') {
  echo json_encode([]);
  exit();
}

if ($token === NULL) {
  echo json_encode([]);
  exit();
}

// Prepared statement
$sql = "SELECT url, title, bytes, dimensions FROM images WHERE access=? AND username=? ORDER BY id DESC";
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

// Execute statement and store results
$username = $token['username'];
mysqli_stmt_bind_param($stmt, 'ss', $access, $username);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

// Convert results to 2D array
$index = 0;
$resultArray = [];
while($row = mysqli_fetch_assoc($result)) {
  $resultArray[$index] = $row;
  $index++;
}

// Return data
echo json_encode($resultArray);
exit();
