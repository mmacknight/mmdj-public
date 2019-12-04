<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
//$table = ($_GET['table'] !== null )? mysqli_real_escape_string($con, trim($_GET['table'])) : false;


if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->event_id) === '' || trim($request->order_num) === '' )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $event_id = mysqli_real_escape_string($con, trim($request->event_id));
  $order_num = mysqli_real_escape_string($con, trim($request->order_num));
  $platform = mysqli_real_escape_string($con, trim($request->platform));
  $song_id = mysqli_real_escape_string($con, trim($request->song_id));
  $popularity = mysqli_real_escape_string($con, trim($request->popularity));

  // Create.
  $sql = "UPDATE `queuedSongs` SET popularity = popularity + {$popularity} WHERE event_id = {$event_id} and order_num = {$order_num}";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [
      'order_num'    => $order_num,
      'event_id' => $event_id
    ];
    echo json_encode($event);
  }
  else
  {
    http_response_code(422);
  }
}
?>
