<?php

function post_update_token($con, $user_id, $access, $refresh){

    // Create query to insert new tokens
    $sql = "INSERT INTO `tokens` VALUES ('{$user_id}','{$access}', '{$refresh}' )";

    if(mysqli_query($con,$sql))
    {
        // success, new entity added
        $token = [
            'user_id'    => $user_id,
            'spotify_access' => $access,
            'spotify_refresh' => $refresh
        ];
    }
    else
    {   
        // query fail
        // try to update record if it exists.
        $sql = "UPDATE tokens SET spotify_access = '{$access}', spotify_refresh = '{$refresh}' WHERE user_id = {$user_id}";

        if(mysqli_query($con,$sql))
        {
            // update of info successful
        }
        else
        {
            // failed to update, error
            http_response_code(423);
            die();
        }
    }
}

?>