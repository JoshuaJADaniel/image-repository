<?php

header('Content-Type: application/json');

require __dir__ . '/../vendor/autoload.php';
require __dir__ . '/../utils/jwt.php';

use \Firebase\JWT\JWT;

// Token is empty
if (!isset($_POST['jwt']) || !$_POST['jwt']) {
  echo json_encode([
    'valid' => FALSE
  ]);
  exit();
}

$token = decodeJwtToken($_POST['jwt']);

// Token is invalid
if ($token === NULL) {
  echo json_encode([
    'valid' => FALSE
  ]);
  exit();
}

// Token valid
echo json_encode([
  'valid' => TRUE
]);
exit();
