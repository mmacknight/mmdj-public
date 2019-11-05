<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$table = ($_GET['table'] !== null )? mysqli_real_escape_string($con, trim($_GET['table'])) : false;


if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate. 
  if(trim($request->event_id) === '' || trim($request->queuedSongs_id) === '' )
  {
    return http_response_code(400);
  }

  // Sanitize.
  $event_id = mysqli_real_escape_string($con, trim($request->event_id));
  $queuedSongs_id = mysqli_real_escape_string($con, trim($request->queuedSongs_id));
  $popularity = mysqli_real_escape_string($con, trim($request->popularity));
  $playability = mysqli_real_escape_string($con, trim($request->playability));

  // Create.
  $sql = "INSERT INTO `queuedSongs`(`event_id`,`queuedSongs_id`, `popularity`, `playability`) VALUES ('{$event_id}','{$queuedSongs_id}', '{$popularity}', '{$playability}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [
      'order_num'    => mysqli_insert_id($con),
      'event_id' => $event_id,
      'queuedSongs_id' => $queuedSongs_id,
      'popularity' => $popularity,
      'playability' => $playability
    ];
    echo json_encode($event);
  }
  else
  {
    http_response_code(422);
  }
}
?>
