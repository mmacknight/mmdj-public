<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['event_id'] !== null && (int)$_GET['event_id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['event_id']) : false;
$user_id = ($_GET['user_id'] !== null && (int)$_GET['user_id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['user_id']) : false;
// echo $event_id;
// echo $user_id;
$songs = [];


$sql1 = "SELECT songs.* , queuedSongs.popularity as qpop, queuedSongs.playability, order_num FROM new_songs as songs, queuedSongs where queuedSongs.event_id = {$event_id} and songs.song_id = queuedSongs.song_id and songs.platform = queuedSongs.platform and playability = true ORDER BY queuedSongs.popularity desc, queuedSongs.order_num";
$sql2 = "SELECT songs.* , queuedSongs.popularity as qpop, queuedSongs.playability, votes.order_num as order_num, votes.vote as vote FROM new_songs as songs, queuedSongs, votes where votes.user_id = {$user_id} and votes.order_num = queuedSongs.order_num and queuedSongs.event_id = {$event_id} and songs.song_id = queuedSongs.song_id and songs.platform = queuedSongs.platform and playability = true ORDER BY queuedSongs.popularity desc, queuedSongs.order_num";

$sql = "SELECT s1.*, s2.vote FROM ({$sql1}) as s1 LEFT JOIN ({$sql2}) as s2 ON s1.order_num = s2.order_num ORDER BY s1.qpop desc, s1.order_num";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $songs[$i]['song_id'] = $row['song_id'];
    $songs[$i]['platform'] = $row['platform'];
    $songs[$i]['title'] = $row['title'];
    $songs[$i]['artist'] = $row['artist'];

    $songs[$i]['artwork'] = $row['artwork'];
    $songs[$i]['genre'] = $row['genre'];
    $songs[$i]['duration'] = $row['duration'];
    $songs[$i]['order_num'] = $row['order_num'];
    $songs[$i]['vote'] = $row['vote'];

    $songs[$i]['popularity'] = $row['qpop'];
    $songs[$i]['playability'] = $row['playability'];
    //$songs[$i]['track_id'] = $row['track_id'];
    // $songs[$i]['danceability'] = $row['danceability'];
    // $songs[$i]['energy'] = $row['energy'];
    // $songs[$i]['instrumental'] = $row['instrumental'];
    // $songs[$i]['music_key'] = $row['music_key'];
    // $songs[$i]['liveness'] = $row['loudness'];
    // $songs[$i]['loudness'] = $row['loudness'];
    // $songs[$i]['mode'] = $row['mode'];
    // $songs[$i]['speechiness'] = $row['speechiness'];
    // $songs[$i]['tempo'] = $row['tempo'];
    // $songs[$i]['time_signature'] = $row['time_signature'];
    // $songs[$i]['valence'] = $row['valence'];
    // $songs[$i]['order_num'] = $row['order_num'];
    $i++;
  }


  echo json_encode($songs);

  http_response_code(200);


}
else
{
  http_response_code(404);
}
?>
