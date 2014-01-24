<?php

/**
 * gmail login: fbgraphapimail@gmail.com
 * gmail pass: opengraph
 * 
 * facebook: https://www.facebook.com/karol.blyskotka
 * facebook login: fbgraphapimail@gmail.com
 * facebook pass: opengraph
 *
 * fb app: Grap­h­A­p­i­R­e­ader
 * fb app: https://developers.facebook.com/x/apps/1396553850593860/dashboard/
 * 
 */

require 'fb/src/facebook.php';

// Create our Application instance (replace this with your appId and secret).
$facebook = new Facebook(array(
  'appId'  => '1396553850593860',
  'secret' => '11e80b23711234d853f9dc1cd6a0165f',
));


function pushFile($content, $filename) {
	header('Content-Type: application/csv');
	header('Content-Disposition: attachement; filename="' . $filename . '"');

	echo($content);
	// die('Yo!');
}

/**
 * fsdfsdf
 * @param  sdfdf $data
 * @return sfdfsdf
 */
function createCsv($data) {

	$fileContent = '';

	foreach ($data as $key => $value) {
		$fileContent .= implode(',', $value) . "\n";
	}

	// return $fileContent;
	return $data;
}

function getComments($id) {

	$limit = 1000;
	$fulldata = array();

	global $facebook;
	$data = $facebook->api('/' . $id . '/comments?limit=' . $limit);
	$fulldata = array_merge($fulldata, $data["data"]);

	while(array_key_exists("paging", $data) && array_key_exists("next", $data["paging"])) {
	    $offset += $limit;
	    $data = $facebook->api("$id/comments/?limit=$limit&offset=$offset");
	    // make sure we do not merge with an empty array
	    if (count($data["data"]) > 0){
	        $fulldata = array_merge($fulldata, $data["data"]);
	    } else {
	        // if the data entry is empty, we have reached the end, exit the while loop
	        break;
	    }
	}

	$newdata = array();
	foreach ($fulldata as $key => $value) {
		$newdata[] = array($value['from']['id']);
		// $newdata[] = array($value['from']['id'], $value['from']['name']);
	}

	return createCsv($newdata);
}

function getLikes($id) {

	$limit = 1000;
	$fulldata = array();
	global $facebook;
	$data = $facebook->api('/' . $id . '/likes?limit=' . $limit);
	$fulldata = array_merge($fulldata, $data["data"]);
	while(array_key_exists("paging", $data) && array_key_exists("next", $data["paging"])) {
	    $offset += $limit;
	    $data = $facebook->api("$id/likes/?limit=$limit&offset=$offset");
	    // make sure we do not merge with an empty array
	    if (count($data["data"]) > 0){
	        $fulldata = array_merge($fulldata, $data["data"]);
	    } else {
	        // if the data entry is empty, we have reached the end, exit the while loop
	        break;
	    }
	}
	$newdata = array();
	foreach ($fulldata as $key => $value) {
		$newdata[] = array($value['from']['id']);
		// $newdata[] = array($value['from']['id'], $value['from']['name']);
	}

	return createCsv($newdata);
}

$id = null;
if (isset($_GET['fb_app_id']) && !empty($_GET['fb_app_id'])) {
	$id = $_GET['fb_app_id'];
}


if ((isset($id)) AND ($id != null)) {
	if (isset($_GET['likes'])) {
		$print = getLikes($id);
		// pushFile($print, $id . '-liked.csv');
	} else {
		$print = getComments($id);
		// pushFile($print, $id . '-commented.csv');
	}	
}
?>
<!doctype html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
  <head>
    <title>Get CSV from FB Graph API</title>
    <link type="text/css" rel="stylesheet" href="main.css" />
  </head>
  <body>
      <form> 
		<label for="fb_app_id">Enter App ID</label>
		<input name="fb_app_id" id="fb_app_id" type="edit" />
		<input type="submit" name="comments" title="Comments" value="Comments" />
		<input type="submit" name="likes" title="Likes" value="Likes" />
	</form>
	<p class="list">
		<?php
			if (isset($print)) {
				// var_dump($print);
				foreach ($print as $key => $value) {
					echo "$value[0]" . "</br>";
				}
			}
		?>
	</p>
  </body>
</html>