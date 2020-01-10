<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > -1)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$songs = [];

$sql = "SELECT songs.*, queuedSongs.popularity, queuedSongs.order_num  FROM new_songs as songs, events, queuedSongs where events.event_id = {$event_id} and queuedSongs.order_num = events.current_song and queuedSongs.song_id = songs.song_id and queuedSongs.platform = songs.platform";

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
    $songs[$i]['duration'] = $row['duration'];
    $songs[$i]['popularity'] = $row['popularity'];
    $songs[$i]['order_num'] = $row['order_num'];

    $i++;
  }


  echo json_encode($songs[0]);

  http_response_code(200);


}
else
{
  http_response_code(404);
}
?>
