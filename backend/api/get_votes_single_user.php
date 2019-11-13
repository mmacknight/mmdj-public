<?php

require 'database.php';

$user_id = ($_GET['user_id'] !== null )? mysqli_real_escape_string($con, trim($_GET['user_id'])) : false;
$event_id = ($_GET['event_id'] !== null )? mysqli_real_escape_string($con, trim($_GET['event_id'])) : false;

$sql = "SELECT * FROM votes WHERE user_id = '{$user_id}' and event_id = '{$event_id}'";
$songs = [];
if($result = mysqli_query($con,$sql))
{
$i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $songs[$i] =  $row;
    $i++;
  }

  echo json_encode($songs);
}
else
{
  http_response_code(404);
}
?>
