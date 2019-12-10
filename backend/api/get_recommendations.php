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

// Extract, validate and sanitize the id.
$event_id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

/**
 * Obtain event host authorization information -- must be in database or we have an error
*/
$token = [];
$sql = "SELECT spotify_access from tokens, events where event_id = {$event_id} and events.user_id = tokens.user_id ";
if ($result = mysqli_query($con, $sql))
{
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $token[$i] = $row['spotify_access'];
        $i++;
    }
    if (strlen($token[0]) < 1 ){
        // TOKEN NOT FOUND
        echo json_encode($event_id);
        http_response_code(404);
        die();
    }
} 
else
{
  // TOKEN NOT FOUND
  echo json_encode($event_id);
  http_response_code(404);
  die();
}


/**
   * Get historical songs to default onto
*/
$hist = [];
$top_songs = [];
$users = [];

$sql1 = "SELECT song_id, platform, sum(vote) as votes from votes group by song_id, platform order by votes desc";

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

    $sql2 = "SELECT song_id, platform, sum(vote) as votes from votes where event_id = {$event_id}  group by song_id, platform order by votes desc ";

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
         * Select top 5 tracks, if there are some, and get recs based on them
         * Fill from hist if necessary
         */
        $track_seeds = [];

        $ct =0;
        foreach ($top_songs as $ts){
            if (ct < 5) {
                $track_seeds[$ct] = $ts;
            } else {
                break;
            }
            $ct ++;
        }

        while ($ct < 5){
            $track_seeds[$ct] = $hist[$ct];
            $ct++;
        }

        /**
         * Now get users who have liked some of these songs and grab some other songs they've liked
         */

        $sql3 =  "SELECT distinct song_id, platform from " .

            "(Select song_id, platform, sum(vote) from votes, " .
            
            "(select user_id, sum(vote) from votes where (song_id = '{$track_seeds[0]['song_id']}' or song_id='{$track_seeds[1]['song_id']}' or song_id='{$track_seeds[2]['song_id']}' or song_id='{$track_seeds[3]['song_id']}' or song_id='{$track_seeds[4]['song_id']}' ) and vote = 1 group by user_id order by sum(vote) desc) top_users " .
            
            "Where votes.user_id = top_users.user_id " .
            
            "Group by song_id, platform " .
            
            "Order by sum(vote) desc) recs " .
                    
            "Where NOT EXISTS " . 
            
            "(SELECT NULL from (select distinct song_id, platform from votes where event_id = {$event_id}) event_songs " .
            "Where recs.song_id = event_songs.song_id and recs.platform = event_songs.platform) " .
            
            " Limit 10 " ;

        $recs = [];
        if($result = mysqli_query($con,$sql3))
        {
            $i = 0;
            while($row = mysqli_fetch_assoc($result))
            {
                $recs[$i]['song_id'] = $row['song_id'];
                $recs[$i]['platform'] = $row['platform'];
                $i++;
            }

        


            echo json_encode($recs);

        
            http_response_code(200);









        }
        else
        {
            // THIRD QUERY ERROR -- recs
            http_response_code(407);
        }

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



