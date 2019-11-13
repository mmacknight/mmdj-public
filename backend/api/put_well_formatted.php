<?php
require 'database.php';

class Data {
  public $isValid = false;
  public $content = "";
  public $table = "";

  public function check_input_data($con){
  
    $table = mysqli_real_escape_string($con, $_GET['table']);
    $postdata = file_get_contents("php://input");
    $request_content = json_decode($postdata);
    
    if(isset($postdata) && !empty($postdata)){
        $this->table = $table;
        $this->isValid = true;
        $this->content = $request_content;
    }
  }
} 

function check_based_on_self($secure_value, $secure_key){
    if($secure_value == get_increment_token()){
        $secure_value = $secure_key." + 1";
    }
    elseif($secure_value == get_decrement_token()){
        $secure_value = $secure_key." - 1";
    }
    return $secure_value;
}

function put_data($data){
    $columns_to_update = [];
    $request_content = json_decode($data->content);
    $table = $data->table;

  
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
    //$sql = "UPDATE `{$table}s` SET {$update_string} WHERE event_id = 3 LIMIT 1";
    $sql = "UPDATE `{$table}s` SET {$update_string} WHERE {$table}_id = {$id} LIMIT 1";
  
}


// Not necessary now, but would be used in real dev because we would have hash codes that 
// change based on time and stuff and we would pass that instead of "int" and "dec"
function get_increment_token(){
    return "inc";
}

function get_decrement_token(){
    return "dec";
}



$data = new Data();
$data->check_input_data($con);


if($data->isValid){
  $sql = put_data($data);

  if(mysqli_query($con, "UPDATE TABLE EVENTS SET USER_ID = USER_ID - 1 WHERE EVENT_ID = 3 LIMIT 1"))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}
?>
