<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

// Extract, validate and sanitize the id.
$username = ($_GET['username'] !== null )? mysqli_real_escape_string($con, trim($_GET['username'])) : false;
$password = ($_GET['password'] !== null )? mysqli_real_escape_string($con, trim($_GET['password'])) : false;


$users = [];
$sql = "SELECT user_id, username, password FROM users where username like '{$username}' limit 1";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$i]['user_id'] = $row['user_id'];
    $users[$i]['username'] = $row['username'];
    $users[$i]['password'] = $row['password'];
    $i++;
  }

  if ($users[0]['password'] !== $password) {
    // incorrect password, emit error
    http_response_code(405);

  } else {
    // this user exists, yay log them in
    http_response_code(200);
  }
  
}
else
{
  // no username found
  http_response_code(404);
}
?>
