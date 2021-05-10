<?php

require __dir__ . '/../vendor/autoload.php';
use \Firebase\JWT\JWT;

function createJwtToken($name, $username) {
  $configs = require __dir__ . '/../config.php';
  $iat = time();
  $exp = time() + 7 * 24 * 60 * 60;

  $payload = [
    'name' => $name,
    'username' => $username,
    'iat' => $iat,
    'exp' => $exp,
  ];

  $jwt = JWT::encode($payload, $configs['JWT_SECRET'], 'HS512');
  return $jwt;
}

function decodeJwtToken($jwt) {
  $configs = require __dir__ . '/../config.php';

  try {
    $token = JWT::decode($jwt, $configs['JWT_SECRET'], ['HS512']);
    return (array)$token;
  } catch (Exception $e) {
    return NULL;
  }
}
