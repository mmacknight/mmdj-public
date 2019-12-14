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

  if ($stmt = mysqli_prepare($con, "INSERT INTO `new_songs` VALUES (?, ?, ?, ?, ?, ?)")){
    /* bind parameters for markers */
    mysqli_stmt_bind_param($stmt, "sssssi", $song_id, $platform, $title, $artist, $artwork, $duration);

    /* execute query */
    mysqli_stmt_execute($stmt);
    
    $rows = mysqli_stmt_affected_rows($stmt);

    mysqli_stmt_close($stmt);

    if ($rows === -1){
      //error
      http_response_code(422);
    } else {
      $song = [
            'song_id'    => $song_id,
            'platform' => $platform,
            'title' => $title,
            'artist' => $artist,
            'artwork' => $artwork,
            'duration' => $duration
       ];
      echo json_encode($song);
      http_response_code(201);
    }

  }

}
?>
