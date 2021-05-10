<?php

$configs = require __dir__ . '/config.php';

$conn = mysqli_connect(
  $configs['DB_SERVER_NAME'],
  $configs['DB_USERNAME'],
  $configs['DB_PASSWORD'],
  $configs['DB_NAME'],
);
