<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$events = [];
$sql = "SELECT event_id, user_id, event_name, description, current_song, is_active FROM events where events.event_id = {$event_id}";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $events[$i]['event_id'] = $row['event_id'];
    $events[$i]['user_id'] = $row['user_id'];
    $events[$i]['event_name'] = $row['event_name'];
    $events[$i]['description'] = $row['description'];
    $events[$i]['current_song'] = $row['current_song'];
    $events[$i]['is_active'] = $row['is_active'];
    $i++;
  }
  
  echo json_encode($events);
  
  http_response_code(200);
  
  
}
else
{
  // no username found
  http_response_code(404);
}
?>
