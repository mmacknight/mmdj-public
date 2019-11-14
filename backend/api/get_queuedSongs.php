<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$songs = [];
$sql = "SELECT songs.* , queuedSongs.popularity as qpop, queuedSongs.order_num as order_num, queuedSongs.playability FROM songs, queuedSongs where queuedSongs.event_id = {$event_id} and songs.song_id = queuedSongs.queuedSongs_id and playability = true ORDER BY queuedSongs.popularity desc, queuedSongs.order_num";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $songs[$i]['song_id'] = $row['song_id'];
    $songs[$i]['title'] = $row['title'];
    $songs[$i]['artist'] = $row['artist'];
    $songs[$i]['genre'] = $row['genre'];
    $songs[$i]['duration_ms'] = $row['duration_ms'];
    $songs[$i]['popularity'] = $row['qpop'];
    $songs[$i]['playability'] = $row['playability'];
    $songs[$i]['track_id'] = $row['track_id'];
    $songs[$i]['danceability'] = $row['danceability'];
    $songs[$i]['energy'] = $row['energy'];
    $songs[$i]['instrumental'] = $row['instrumental'];
    $songs[$i]['music_key'] = $row['music_key'];
    $songs[$i]['liveness'] = $row['loudness'];
    $songs[$i]['loudness'] = $row['loudness'];
    $songs[$i]['mode'] = $row['mode'];
    $songs[$i]['speechiness'] = $row['speechiness'];
    $songs[$i]['tempo'] = $row['tempo'];
    $songs[$i]['time_signature'] = $row['time_signature'];
    $songs[$i]['valence'] = $row['valence'];
    $songs[$i]['order_num'] = $row['order_num'];
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
