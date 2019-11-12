<?php

require 'database.php';

$user_id = ($_GET['user_id'] !== null )? mysqli_real_escape_string($con, trim($_GET['user_id'])) : false;
$event_id = ($_GET['event_id'] !== null )? mysqli_real_escape_string($con, trim($_GET['event_id'])) : false;

$sql = "SELECT vote FROM votes WHERE user_id = '{$user_id}' and event_id = '{$event_id}'";

if($result = mysqli_query($con,$sql))
{
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
}
else
{
  http_response_code(404);
}
?>
