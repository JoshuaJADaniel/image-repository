<?php

require __DIR__ . '/client.php';

// Redirect user to authenticate
$client = createClientRequest();
$authUrl = $client->createAuthUrl();
header('Location: ' . filter_var($authUrl, FILTER_SANITIZE_URL));
exit();
