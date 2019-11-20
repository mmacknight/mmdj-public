<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
  // Validate.
  if(trim($request->event_id) === '' || trim($request->order_num) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $event_id = mysqli_real_escape_string($con, trim($request->event_id));
  $order_num = mysqli_real_escape_string($con, trim($request->order_num));

  // Create.
  $sql = "UPDATE events SET current_song = {$order_num} WHERE event_id = {$event_id}";
  $sql_q = "UPDATE queuedSongs SET playability = 0 WHERE order_num = {$order_num}";

  if(mysqli_query($con,$sql))
  {
    if(mysqli_query($con,$sql_q))
    {
      http_response_code(201);
    }
    else
    {
      http_response_code(422);
    }
  }
  else
  {
    // username already taken
    http_response_code(422);
  }
}
?>
