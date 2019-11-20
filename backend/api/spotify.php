<?php

// require 'simple_html_dom.php';
require 'database.php';
// Create DOM from URL or file
$query = ($_GET['query'] !== null )? mysqli_real_escape_string($con, trim($_GET['query'])) : false;

echo "Hello";
// $html = file_get_html("https://www.youtube.com/feed/trending");
$html = file_get_html(`https://api.spotify/v1/search?query={$query}&type=track`);
// creating an array of elements
// $videos = [];
// // Find top ten videos
// $i = 1;
//
// foreach ($html->find('div.yt-lockup') as $videoDiv) {
//         if ($i > 1000) {
//                 break;
//         }
//         $dataThumb='data-thumb';
//         $img = stripslashes($videoDiv->find('img',0)->src);
//
//         if ($img === "" || $img[0] === '/') {
//           $img = stripslashes($videoDiv->find('img',0)->$dataThumb);
//         }
//
//         $video = $videoDiv->find('h3',0);
//
//         // Find item link element
//         $videoDetails = $video->find('a', 0);
//         // get title attribute
//         $videoTitle = $videoDetails->title;
//         // get href attribute
//         $videoUrl = 'https://youtube.com' . $videoDetails->href;
//
//         // push to a list of videos
//         $href = $videoDetails->href;
//
//         // echo $href;
//         if ($href && $href[1] === 'w') {
//           $videos[] = [
//             'title' => $videoTitle,
//             'url' => $videoUrl,
//             'thumb' => $img
//           ];
//         }
//
//         $i++;
// }

echo json_encode($html);
