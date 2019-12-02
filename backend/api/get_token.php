<?php
/**
 * Returns the token for a user
 */
require 'database.php';
require 'refresh_token.php';

// Extract, validate and sanitize the id.
$user_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

$token = [];
$sql = "SELECT * FROM tokens where user_id = {$user_id}";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $token[$i]['user_id'] = $row['user_id'];
    $token[$i]['spotify_access'] = $row['spotify_access'];
    $token[$i]['spotify_refresh'] = $row['spotify_refresh'];
    $i++;
  }
  
//   if ($i === 0){
//     $redirect = 'http://db.cse.nd.edu/cse30246/tutorial/dom/auth.php/?id=13';
//     header("Location: {$redirect}");
//     echo json_encode($sql);
//     die();
//   }

  echo json_encode($token);

  http_response_code(200);
  
  
}
else
{
  // error
  http_response_code(404);
}
?>
