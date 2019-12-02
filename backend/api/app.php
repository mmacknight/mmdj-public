<?php
require 'database.php';

$api = new SpotifyWebAPI\SpotifyWebAPI();

// Fetch the saved access token from somewhere. A database for example.
$api->setAccessToken($accessToken);

// It's now possible to request data about the currently authenticated user
print_r(
    $api->me()
);
?>