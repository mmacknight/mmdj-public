<?php
/**
 * Returns the list of policies.
 */
require 'database.php';
// Extract, validate and sanitize the id.
$song_id = ($_GET['song_id'] !== null )? mysqli_real_escape_string($con, trim($_GET['song_id'])) : false;
$platform = ($_GET['platform'] !== null )? mysqli_real_escape_string($con, trim($_GET['platform'])) : false;

$songs = [];

$sql = "SELECT * FROM new_songs where song_id = '{$song_id}' and platform = '{$platform}'";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $songs[$i]['song_id'] = $row['song_id'];
    $songs[$i]['platform'] = $row['platform'];
    $songs[$i]['artist'] = $row['artist'];
    $songs[$i]['artwork'] = $row['artwork'];
    $songs[$i]['duration'] = $row['duration'];
    $songs[$i]['title'] = $row['title'];
    $i++;
  }

  echo json_encode($songs[0]);

  http_response_code(200);


}
else
{
  // no username found
  http_response_code(404);
}
?>
