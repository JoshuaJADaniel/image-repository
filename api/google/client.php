<?php

require __dir__ . '/../vendor/autoload.php';

// Creates a client request
function createClientRequest() {
  $configs = require __dir__ . '/../config.php';

  $client = new Google_Client();
  $client->addScope('profile');
  $client->addScope('email');

  $client->setClientId($configs['CLIENT_ID']);
  $client->setClientSecret($configs['CLIENT_SECRET']);
  $client->setRedirectUri($configs['REDIRECT_URI']);

  return $client;
}
