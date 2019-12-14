<?php
session_start();
require 'vendor/autoload.php';
require 'database.php';
require 'post_token.php';

// NEEDS user ID
$user_id = $_SESSION['user_id'];

$uri = 'http://db.cse.nd.edu/cse30246/mmdj/backend/api/callback.php';

$session = new SpotifyWebAPI\Session(
    'a252d232b64e4182a2e3a491efa29e4b',
    '84add67aa0d440ccb65e6a865de224e4',
    $uri
);

// Request a access token using the code from Spotify
$session->requestAccessToken($_GET['code']);

$accessToken = $session->getAccessToken();
$refreshToken = $session->getRefreshToken();

// Store the access and refresh tokens INTO THE TOKENS TABLE

post_update_token($con, $user_id, $accessToken, $refreshToken);

$redirect = 'http://db.cse.nd.edu/cse30246/mmdj/';
// Send the user back to page
header("Location: {$redirect}");
die();
?>