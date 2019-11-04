<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$songs = [];
$sql = "SELECT song_id, title, artist, genre, duration_ms, order_num, popularity, playability FROM songs, queuedSongs where '%{$event_id}%' = queuedSongs.event_id and songs.song_id = queuedSongs.queuedSongs_id ORDER BY queuedSongs.order_num";

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
    $songs[$i]['order_num'] = $row['order_num'];
    $songs[$i]['popularity'] = $row['popularity'];
    $songs[$i]['playability'] = $row['playability'];
    $i++;
  }
  
  echo json_encode($songs);
  
  http_response_code(200);
  
  
}
else
{
  // no username found
  http_response_code(404);
}
?>
