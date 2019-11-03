<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$query = ($_GET['query'] !== null )? mysqli_real_escape_string($con, trim($_GET['query'])) : false;


$songs = [];
$sql = "SELECT song_id, title, artist, genre, duration_ms FROM songs where title like '%{$query}%'";

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
    $i++;
  }
  
  echo json_encode($query);
  echo json_encode($songs);
  
  http_response_code(200);
  
  
}
else
{
  // no username found
  http_response_code(404);
}
?>
