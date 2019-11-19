<?php
require 'database.php';

// Get the posted data.


$postdata = file_get_contents("php://input");
$table = mysqli_real_escape_string($con, $_GET['table']);

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $class_object = json_decode($postdata);

  $columns = [];
  $values = [];

  foreach($class_object as $key => $value) {

      $secure_key = mysqli_real_escape_string($con, $key);
      $secure_value = mysqli_real_escape_string($con, $value);

      array_push($columns, $secure_key);
      array_push($values, "'".$secure_value."'");
  }

  $columns = "(".implode(",", $columns).")";
  $values = "(".implode(",", $values).")";

  // Update.
  $sql = "INSERT INTO `{$table}s` {$columns} VALUES {$values}";

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
