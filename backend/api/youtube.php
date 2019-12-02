<?php

require 'simple_html_dom.php';
require 'database.php';
// Create DOM from URL or file
$query = ($_GET['query'] !== null )? mysqli_real_escape_string($con, trim($_GET['query'])) : false;
$query = str_replace(' ', '+', $query);

// $html = file_get_html("https://www.youtube.com/feed/trending");
$html = file_get_html("https://www.youtube.com/results?search_query={$query}");
// creating an array of elements
$videos = [];
// Find top ten videos
$i = 1;

foreach ($html->find('div.yt-lockup') as $videoDiv) {
        if ($i > 1000) {
                break;
        }
        $dataThumb='data-thumb';
        $img = stripslashes($videoDiv->find('img',0)->src);

        if ($img === "" || $img[0] === '/') {
          $img = stripslashes($videoDiv->find('img',0)->$dataThumb);
        }

        $video = $videoDiv->find('h3',0);

        // Find item link element
        $videoDetails = $video->find('a', 0);
        // get title attribute
        $videoTitle = $videoDetails->title;
        // get href attribute
        $videoUrl = $videoDetails->href;

        $videoDuration = $videoDiv->find('span.video-time',0)->plaintext;
        // push to a list of videos
        $href = $videoDetails->href;
        // echo $href;
        if ($href && $href[1] === 'w') {
          $videos[] = [
            'title' => $videoTitle,
            'url' => $videoUrl,
            'duration' => $videoDuration,
            'artwork' => $img,
          ];
        }

        $i++;
}

echo json_encode($videos);
