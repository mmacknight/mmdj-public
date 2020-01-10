<?php
session_start();
// NEEDS to take  a user id

require_once 'vendor/autoload.php';
require 'database.php';

$user_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$_SESSION['user_id'] = $user_id;

// $redirect = 'http://db.cse.nd.edu/cse30246/mmdj/backend/api/callback.php';
$redirect = 'http://3.15.21.28/backend/api/callback.php';

$session = new SpotifyWebAPI\Session(
  'c7d322da32444b989421f7cc942c64a3',
  'bbf11a8863f54322ae199bc122106ab6',
  // 'http://3.15.21.28/'
    // 'a252d232b64e4182a2e3a491efa29e4b',
    // '84add67aa0d440ccb65e6a865de224e4',
  $redirect
);

$options = [
    'scope' => [
        'ugc-image-upload',
        'user-read-playback-state',
        'user-modify-playback-state',
        'streaming',
        'app-remote-control',
        'user-read-email',
        'user-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-read-private',
        'playlist-modify-private',
        'user-library-modify',
        'user-library-read',
        'user-top-read',
        'user-read-recently-played',
        'user-follow-read',
        'user-follow-modify'
    ],
];

header('Location: ' . $session->getAuthorizeUrl($options));
die();

?>
