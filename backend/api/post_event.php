<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$table = ($_GET['table'] !== null )? mysqli_real_escape_string($con, trim($_GET['table'])) : false;


if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate. TODO, add more checks to make sure everything necesssary is there
  if(trim($request->user_id) === '' || trim($request->event_name) === '')
  {
    return http_response_code(400);
  }

  // Sanitize.
  $user_id = mysqli_real_escape_string($con, trim($request->user_id));
  $event_name = mysqli_real_escape_string($con, trim($request->event_name));
  $description = mysqli_real_escape_string($con, trim($request->description));
  $population = mysqli_real_escape_string($con, trim($request->population));
  $current_song = mysqli_real_escape_string($con, trim($request->current_song));
  $is_active = mysqli_real_escape_string($con, trim($request->is_active));



  // Create.
  $sql = "INSERT INTO `events`(`user_id`,`event_name`, `description`, `population`, `current_song`, `is_active`) VALUES ('{$user_id}','{$event_name}', '{$description}', '{$population}', '{$current_song}', '{$is_active}' )";
  if ($stmt = mysqli_prepare($con, "INSERT INTO `events`(`user_id`,`event_name`, `description`, `population`, `current_song`, `is_active`) VALUES ( ?, ?, ?, ?, ?, ? )")){
    /* bind parameters for markers */
    mysqli_stmt_bind_param($stmt, "issiii", $user_id, $event_name, $description, $population, $current_song, $is_active);
    
    /* execute query */
    mysqli_stmt_execute($stmt);

    $rows = mysqli_stmt_affected_rows($stmt);

    mysqli_stmt_close($stmt);

    if ($rows === -1){
      //error
      http_response_code(422);
    } else {
      $event = [
        'event_id'    => mysqli_insert_id($con),
        'user_id' => $user_id,
        'event_name' => $event_name,
        'description' => $description,
        'population' => $population,
        'current_song' => $current_song,
        'is_active' => $is_active
      ];
      echo json_encode($event);
      http_response_code(201);
    }
  }

}
?>
