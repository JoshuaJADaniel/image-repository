<?php

header('Content-Type: application/json');

require __dir__ . '/../db.inc.php';
require __dir__ . '/../utils/jwt.php';
$configs = require __dir__ . '/../config.php';

// POST parameters missing
if (!isset($_FILES['image'], $_POST['title'], $_POST['access'], $_POST['jwt'])) {
  echo json_encode([
    'error' => 'Missing required POST parameters!',
  ]);
  exit();
}

$image = $_FILES['image'];
$title = trim($_POST['title']);
$access = $_POST['access'];
$jwt = $_POST['jwt'];
$user = decodeJwtToken($jwt);

// JWT token is not valid
if ($user === NULL) {
  echo json_encode([
    'error' => 'You are not logged in!',
  ]);
  exit();
}

// File is blank
if (!$_FILES['image']) {
  echo json_encode([
    'error' => 'File is blank!',
  ]);
  exit();
}

// Title is not valid
if (strlen($title) < 8 || strlen($title) > 150) {
  echo json_encode([
    'error' => 'Title should be between 8-150 characters!',
  ]);
  exit();
}

// Access is not valid
if ($access !== 'public' && $access !== 'private') {
  echo json_encode([
    'error' => 'Access does not match allowed values!',
  ]);
  exit();
}

// File upload issues
switch($image['error'] ) {
  case UPLOAD_ERR_OK:
    break;
  case UPLOAD_ERR_INI_SIZE:
  case UPLOAD_ERR_FORM_SIZE:
    echo json_encode([
      'error' => 'File upload is too large!',
    ]);
    exit();
  case UPLOAD_ERR_PARTIAL:
    echo json_encode([
      'error' => 'File upload could not be completed!',
    ]);
    exit();
case UPLOAD_ERR_NO_FILE:
    echo json_encode([
      'error' => 'File is 0 bytes in length!',
    ]);
    exit();
  default:
    echo json_encode([
      'error' => 'Internal server error!',
    ]);
    exit();
}

// Storing file issue
$targetPath = __dir__ . '/uploads/' . basename($image['name']);
if (!move_uploaded_file($image['tmp_name'], $targetPath)) {
  echo json_encode([
    'error' => 'Error moving uploaded file!',
  ]);
  exit();
}

$fields = [
  'upload_preset' => $configs['CLOUD_PRESET'],
  'file' => 'https://' . $_SERVER['HTTP_HOST'] . str_replace($_SERVER['DOCUMENT_ROOT'], '', $targetPath),
];

// Open connection
$ch = curl_init();

// Set URL, POST data, Transfer
curl_setopt($ch, CURLOPT_URL, $configs['CLOUD_UPLOAD']);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute post and close
$result = curl_exec($ch);
$result = json_decode($result, true);
curl_close($ch);

// Prepared statement for insertion
$sql = 'INSERT INTO images (url, title, username, access, bytes, dimensions) VALUES (?, ?, ?, ?, ?, ?)';
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
  error_log('SQL statement failed');
  exit();
}

$url = $result['secure_url'];
$username = $user['username'];
$bytes = $result['bytes'];
$dimensions = $result['width'] . 'x' . $result['height'];

mysqli_stmt_bind_param(
  $stmt,
  'ssssis',
  $url,
  $title,
  $username,
  $access,
  $bytes,
  $dimensions
);
mysqli_stmt_execute($stmt);

if ($access === 'public') {
  echo json_encode([
    'success' => 'File was uploaded! Go to the homepage or profile and refresh!',
  ]);
  exit();
} else {
  echo json_encode([
    'success' => 'File was uploaded! Go to your profile\'s private uploads and refresh!',
  ]);
  exit();
}
