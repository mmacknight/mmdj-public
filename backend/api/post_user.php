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
  if(trim($request->username) === '' || trim($request->password) === '' || trim($request->user_id) === '' )
  {
    return http_response_code(400);
  }
  // Sanitize.
  $user_id = mysqli_real_escape_string($con, trim($request->user_id));
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = mysqli_real_escape_string($con, trim($request->password));
  // Create.
  $sql = "UPDATE users SET password = '{$password}', username = '{$username}' WHERE user_id = {$user_id}";
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $user = [
      'user_id' => $user_id,
      'username'    => $username,
      'password' => $password
    ];
    echo json_encode($user);
  }
  else
  {
    // username already taken
    http_response_code(422);
  }
}
?>
