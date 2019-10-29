<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$songs = [];
$sql = "SELECT user_id, username, password FROM users";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $songs[$i]['user_id']    = $row['user_id'];
    $songs[$i]['username'] = $row['username'];
    $songs[$i]['password'] = $row['password'];
    $i++;
  }

  echo json_encode($songs);
}
else
{
  http_response_code(404);
}
?>
