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

if ($stmt = mysqli_prepare($con, "SELECT user_id, username, password FROM users where username like ? limit 1" )){
 
  /* bind parameters for markers */
  mysqli_stmt_bind_param($stmt, "s", $username);

  /* execute query */
  mysqli_stmt_execute($stmt);

  /* bind result variables */
  mysqli_stmt_bind_result($stmt, $id, $name, $code);

  /* fetch values */
  $i = 0;
  while (mysqli_stmt_fetch($stmt)) {
    $users[$i]['user_id'] = $id;
    $users[$i]['username'] = $name;
    $users[$i]['password'] = $code;
    $i++;
  }

  mysqli_stmt_close($stmt);
  
  if ($users === []){
    // no username found
    http_response_code(404);
  

  } else if ($users[0]['password'] !== $password) {
    // incorrect password, emit error
    http_response_code(405);

  } else {
    // this user exists, yay log them in
    echo json_encode($users[0]);
    http_response_code(200);
  }

}

?>
