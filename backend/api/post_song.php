<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");


if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate that keys are present
  if(trim($request->song_id) === '' || trim($request->platform) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $song_id = mysqli_real_escape_string($con, trim($request->song_id));
  $platform = mysqli_real_escape_string($con, trim($request->platform));
  $title = mysqli_real_escape_string($con, trim($request->title));
  $artist = mysqli_real_escape_string($con, trim($request->artist));
  $artwork = mysqli_real_escape_string($con, trim($request->artwork));
  $duration = mysqli_real_escape_string($con, trim($request->duration));



  // Create.
  $sql = "INSERT INTO `new_songs` VALUES ('{$song_id}','{$platform}', '{$title}', '{$artist}', '{$artwork}', '{$duration}' )";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $song = [
      'song_id'    => $song_id,
      'platform' => $platform,
      'title' => $title,
      'artist' => $artist,
      'artwork' => $artwork,
      'duration' => $duration
    ];
    echo json_encode($song);
  }
  else
  {
    http_response_code(422);
  }
}
?>
