<?php
/**
 * function that queries database for recommendation seeds
 * 
 * requires input of event_id
 * 
 * this generates seeds based on liked songs of most active users
 * in an event that haven't been played in the event queue yet.
 * 
 */

function getUserRecs($event_id, $con){

    /**
     * Get historical songs to default onto
    */
    $hist = [];
    $top_songs = [];
    $users = [];

    // $sql1 = "SELECT song_id, platform, sum(vote) as votes from votes group by song_id, platform order by votes desc";
    $sql1 = "SELECT songs.*, votes from (SELECT song_id, platform, sum(vote) as votes from votes where platform = 'spotify'"
            . " GROUP BY song_id, platform order by votes desc limit 10) highest, new_songs as songs" 
            . " where songs.song_id = highest.song_id and songs.platform = highest.platform";
    
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

        // $sql2 = "SELECT song_id, platform, sum(vote) as votes from votes where event_id = {$event_id}  group by song_id, platform order by votes desc ";
    $sql2 = "SELECT songs.*, votes from (SELECT song_id, platform, sum(vote) as votes from votes "
                . " where event_id = {$event_id} and platform = 'spotify' "
                . " group by song_id, platform order by votes desc limit 10) highest, new_songs as songs"
                . " where songs.song_id = highest.song_id and songs.platform = highest.platform";

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
             * Select top 10 tracks, if there are some, and get recs based on them
             * Fill from hist if necessary
             */
            $track_seeds = [];

            $ct =0;
            foreach ($top_songs as $ts){
                if (ct < 10) {
                    $track_seeds[$ct] = $ts;
                } else {
                    break;
                }
                $ct ++;
            }

            while ($ct < 10){
                $track_seeds[$ct] = $hist[$ct];
                $ct++;
            }

            /**
             * Now get users who have liked some of these songs and grab some other songs they've liked
             */

            $sql3 =  "SELECT new_songs.* from new_songs, " .
            
                " (SELECT distinct song_id, platform from " .

                "(Select song_id, platform, sum(vote) from votes, " .
                
                "(select user_id, sum(vote) from votes where (song_id = '{$track_seeds[0]['song_id']}' or song_id='{$track_seeds[1]['song_id']}' or song_id='{$track_seeds[2]['song_id']}' or song_id='{$track_seeds[3]['song_id']}' or song_id='{$track_seeds[4]['song_id']}' ) and vote = 1 group by user_id order by sum(vote) desc) top_users " .
                
                "Where votes.user_id = top_users.user_id " .
                
                "Group by song_id, platform " .
                
                "Order by sum(vote) desc) recs " .
                        
                "Where NOT EXISTS " . 
                
                "(SELECT NULL from (select distinct song_id, platform from votes where event_id = {$event_id}) event_songs " .
                "Where recs.song_id = event_songs.song_id and recs.platform = event_songs.platform) " .
                " Limit 10 ) recs " . 

                " Where recs.song_id = new_songs.song_id and recs.platform = new_songs.platform ";

            $recs = [];
            if($result = mysqli_query($con,$sql3))
            {
                $i = 0;
                while($row = mysqli_fetch_assoc($result))
                {
                    $recs[$i]['song_id'] = $row['song_id'];
                    $recs[$i]['platform'] = $row['platform'];
                    $recs[$i]['title'] = $row['title'];
                    $recs[$i]['duration'] = $row['duration'];
                    $recs[$i]['artist'] = $row['artist'];
                    $recs[$i]['artwork'] = $row['artwork'];
                    $i++;
                }

                $values = [];
                $values['seeds'] = $track_seeds;
                $values['recs'] = $recs;
            
                return $values;

            }
            else
            {
                // THIRD QUERY ERROR -- recs
                return false;
            }

        }
        else
        {
        // SECOND QUERY ERROR -- TOP SONGS per event
        return false;
        }
    }
    else
    {
    // FIRST QUERY ERROR -- hist
        return false;
    }


}


?>



