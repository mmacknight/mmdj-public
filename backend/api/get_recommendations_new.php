<?php
/**
 * queries database for recommendation seeds
 * 
 * requires input of event_id
 * 
 * some seed values come from most popular genres in an event (1-2)
 * one seed value comes from most voted for song in an event
 * 2 seeds come from most liked songs from a history generated of all users in an event
 * 
 * if event is empty, we will generate recommendations based on user liked songs
 * 
 * if this is users first event, we will generate based on most popular songs in our DB
 * 
 */
require 'vendor/autoload.php';
require 'database.php';
require 'rec_helper.php';

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

/**
   * Get historical songs to default onto
*/
$hist = [];
$top_songs = [];
$users = [];

$sql1 = "SELECT song_id, platform, sum(vote) as votes from votes where platform = 'spotify' group by song_id, platform order by votes desc";

if($result = mysqli_query($con,$sql1))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $hist[$i]['song_id'] = $row['song_id'];
        $hist[$i]['platform'] = $row['platform'];
        $hist[$i]['score'] = $row['votes'];
        $i++;
    }

    /**
     * Now get list of songs per event in order by aggregate votes
     */

    $sql2 = "SELECT song_id, platform, sum(vote) as votes from votes where event_id = {$event_id} and platform='spotify' group by song_id, platform order by votes desc ";

    if($result = mysqli_query($con,$sql2))
    {
        $i = 0;
        while($row = mysqli_fetch_assoc($result))
        {
            $top_songs[$i]['song_id'] = $row['song_id'];
            $top_songs[$i]['platform'] = $row['platform'];
            $top_songs[$i]['score'] = $row['votes'];
            $i++;
        }


        /**
         * Select track seeds from helper function
         */

        $event_recs = getUserRecs($event_id, $con);
        $track_seeds = $event_recs['seeds'];
        $event_recs = $event_recs['recs'];

        /**
         * Get two more recs made on Genre, and artist, if possible,
         * Otherwise, revert to local recommendations from other user-like songs
         */

        $api = new SpotifyWebAPI\SpotifyWebAPI();

        $session = new SpotifyWebAPI\Session(
            'a252d232b64e4182a2e3a491efa29e4b',
            '84add67aa0d440ccb65e6a865de224e4'
        );

        $session->requestCredentialsToken();
        $accessToken = $session->getAccessToken();
        $api->setAccessToken($accessToken);

        $headers = [
            'Accept: application/json ',
            'Content-Type: application/json',
            'Authorization: Bearer '. $accessToken,
        ];
        
        shuffle($track_seeds);
        $usable_seeds=[];
        $j = 0;
        foreach ($track_seeds as $track){
            $usable_seeds[$i] = $track['song_id'];
            $i++;
        }
        $usable_seeds = implode(',', array_slice($usable_seeds, 0, 5, true) );

        // Send the request & save response to $resp
        $response = [];
        $ct = 0;
        for ($i=0; $i<2; $i++){
            $curl = curl_init();
            
            $url = 'https://api.spotify.com/v1/recommendations?limit=' . strval(10) . '&seed_tracks=' . $usable_seeds;
        
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
            $ans = curl_exec($curl);
            $response = json_decode($ans, true);
            
            curl_close($curl);
            if ( $response['error']['status'] != 400){
                break;
            }
            $ct++;
        }
        
        $raw_recs = $response['tracks'];
        $recs = [];
        $ct =0;
        foreach ($raw_recs as $track){
            $recs[$ct]['artist'] = $track['artists'][0]['name'];
            $recs[$ct]['platform'] = 'spotify';
            $recs[$ct]['title'] = $track['name'];
            $recs[$ct]['song_id'] = $track['id'];
            $recs[$ct]['duration'] = $track['duration_ms'];
            $recs[$ct]['artwork'] = $track['album']['images'][0]['url'];
            $ct++;
        }

        $recs = array_merge($recs, $event_recs);
        shuffle($recs);
        $final_recs = array_slice($recs, 0, 5, true);
        echo json_encode($final_recs , JSON_UNESCAPED_SLASHES);
        http_response_code(200);

        
    }
    else
    {
    // SECOND QUERY ERROR -- TOP SONGS per event
    http_response_code(406);
    }
}
else
{
  // FIRST QUERY ERROR -- hist
  http_response_code(405);
}




?>



