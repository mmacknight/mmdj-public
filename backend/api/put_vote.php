<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if(trim($request->user_id) === '' || trim($request->event_id) === '' || trim($request->vote) === '' || trim($request->song_id) === ''  || trim($request->order_num) === '' )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $user_id = mysqli_real_escape_string($con, trim($request->user_id));
  $event_id = mysqli_real_escape_string($con, trim($request->event_id));
  $vote = mysqli_real_escape_string($con, trim($request->vote));
  $song_id = mysqli_real_escape_string($con, trim($request->song_id));
  $order_num = mysqli_real_escape_string($con, trim($request->order_num));

  // Create.
  $sql = "UPDATE votes SET vote = {$vote} WHERE user_id = {$user_id} AND event_id = {$event_id} AND song_id = {$song_id} AND order_num = {$order_num}";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
  }
  else
  {
    // username already taken
    http_response_code(422);
  }
}
?>
