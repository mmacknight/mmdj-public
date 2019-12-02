<?php
session_start();
// NEEDS to take  a user id

require_once 'vendor/autoload.php';
require 'database.php';

$user_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$_SESSION['user_id'] = $user_id;

$redirect = 'http://db.cse.nd.edu/cse30246/tutorial/dom/callback.php';

$session = new SpotifyWebAPI\Session(
    'a252d232b64e4182a2e3a491efa29e4b',
    '84add67aa0d440ccb65e6a865de224e4',
    $redirect
);

$options = [
    'scope' => [
        'playlist-read-private',
        'user-read-private',
    ],
];

header('Location: ' . $session->getAuthorizeUrl($options));
die();

?>