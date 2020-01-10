<?php
require "vendor/autoload.php";
require "post_token.php";

function refresh_token_for_user($con, $user_id){
    $session = new SpotifyWebAPI\Session(
        'c7d322da32444b989421f7cc942c64a3',
        'bbf11a8863f54322ae199bc122106ab6',
        'http://3.15.21.28/'
        // 'http://localhost:4200/'
    );

    // Fetch the refresh token from database
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

    }
    else
    {
        // sql error
        http_response_code(404);
        die();
    }

    $refresh = $token[0]['spotify_refresh'];
    $session->setRefreshToken($refresh);
    $session->refreshAccessToken();

    $accessToken = $session->getAccessToken();

    //update access token in database
    post_update_token($con, $user_id, $accessToken, $refresh);

}

?>
