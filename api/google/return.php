<?php

require __dir__ . '/client.php';
require __dir__ . '/../vendor/autoload.php';
require __dir__ . '/../utils/jwt.php';
$configs = require __dir__ . '/../config.php';

$client = createClientRequest();

// Check for code URL param
if (!isset($_GET['code']) || !$_GET['code']) {
  error_log('Failed to access return auth code!');
  header('Location: ' . $configs['HOME_URL']);
  exit();
}

// Authenticate Google OAuth Flow
$token = $client->fetchAccessTokenWithAuthCode($_GET['code']);

// Check for validation errors
if (isset($token['error'])) {
  error_log('Auth code is invalid!');
  header('Location: ' . $configs['HOME_URL']);
  exit();
}

// Access user info
$client->setAccessToken($token['access_token']);
$googleOauth = new Google_Service_Oauth2($client);
$googleAccountInfo = $googleOauth->userinfo->get();

// Create JWT token and redirect
$jwt = createJwtToken($googleAccountInfo->name, $googleAccountInfo->id);
header('Location: ' . $configs['HOME_URL'] . '?jwt=' . $jwt);
exit();
