<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

// echo $postdata;
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $class_object = json_decode($postdata);

  $things_to_update = [];

  $table = null;

  $id = null;

  foreach($class_object as $key => $value) {
      $secure_value = mysqli_real_escape_string($con, $value);
      $temp_string = "`".$key."`=" . $secure_value;
      array_push($things_to_update, $temp_string);
      if (strpos($key, "id")){
        $table = $key."s";
        $id = $value;
      }
  }
  $update_string = implode(",", $things_to_update);

  // Update.
  $sql = "INSERT INTO {$table} SET {$update_string}";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}
?>
