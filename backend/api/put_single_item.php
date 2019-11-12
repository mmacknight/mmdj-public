<?php
require 'database.php';
//require "put_post_helper.php";
require "put_helper.php";

class Data {
    public $isValid = false;
    public $content;
}


$table = mysqli_real_escape_string($con, $_GET['table']);

$postdata = file_get_contents("php://input");

$data = new Data();
$data->isValid = true;

if(isset($postdata) && !empty($postdata) && $data->isValid){

    $columns_to_update = [];
    $request_content = json_decode($postdata);


    foreach($request_content as $key => $value) {
        $secure_key = mysqli_real_escape_string($con, $key);
        $secure_value = mysqli_real_escape_string($con, $value);

        $secure_value = check_based_on_self($secure_value, $secure_key);

        $temp_string = $secure_key."=".$secure_value;
        array_push($columns_to_update, $temp_string);

        if ($secure_key == $table."_id"){
          $id = (int)$secure_value;
        }
    }

    $update_string = implode(",", $columns_to_update);

    // Update.
    $sql = "UPDATE `{$table}s` SET {$update_string} WHERE {$table}_id = {$id} LIMIT 1";

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