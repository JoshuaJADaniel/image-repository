<?php

header('Content-Type: application/json');

require __dir__ . '/../db.inc.php';

// GET parameters missing
if (!isset($_GET['search']) || !$_GET['search']) {
  echo json_encode([]);
  exit();
}

$search = $_GET['search'];

// Prepared statement
$sql = "SELECT id, url, title, bytes, dimensions FROM images WHERE access='public' AND title LIKE CONCAT('%', ?, '%') ORDER BY id DESC";
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

// Execute statement and store results
mysqli_stmt_bind_param($stmt, 's', $search);
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
