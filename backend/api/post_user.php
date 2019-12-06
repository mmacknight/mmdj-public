<?php
require 'database.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
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

  $password = crypt($password, "xYDoMwaNTzU2HacKhIM"); // currently using constant SALT. could enhance by doing random salt each time and storing salt in DB
// Create.
  $sql = "INSERT INTO `users`(`username`,`password`) VALUES ('{$username}','{$password}')";
  
  if ($stmt = mysqli_prepare($con, "INSERT INTO `users`(`username`,`password`) VALUES ( ?, ?)" )){
 
    /* bind parameters for markers */
    mysqli_stmt_bind_param($stmt, "ss", $username, $password);
  
    /* execute query */
    mysqli_stmt_execute($stmt);
    
    $rows = mysqli_stmt_affected_rows($stmt);

    mysqli_stmt_close($stmt);

    if ($rows === -1){
      //username already taken
      http_response_code(422);
    } else {
      $user = [
        'user_id' =>  mysqli_insert_id($con),
        'username'    => $username,
        'password' => $password
      ];
      echo json_encode($user);
      http_response_code(201);
    }
  }
}
?>