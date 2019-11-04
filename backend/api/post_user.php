<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$password = ($_GET['table'] !== null )? mysqli_real_escape_string($con, trim($_GET['table'])) : false;
echo $table;

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if(trim($request->username) === '' || trim($request->password) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $username = mysqli_real_escape_string($con, trim($request->username));
  $password = mysqli_real_escape_string($con, trim($request->password));


  // Create.
  $sql = "INSERT INTO `users`(`username`,`password`) VALUES ('{$username}','{$password}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $user = [
      'username' => $username,
      'password' => $password,
      'user_id'    => mysqli_insert_id($con)
    ];
    echo json_encode($user);
  }
  else
  {
    http_response_code(422);
  }
}
?>
