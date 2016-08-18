<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $query = "SELECT * FROM posts LEFT JOIN blog_entries ON posts.id = blog_entries.id_post ORDER BY id DESC";
    $posts = $connection->query($query); 
    $results = array();
    WHILE ($rows = mysqli_fetch_array($posts)):
        $id = $rows['ID'];
        $type    = $rows['POST_TYPE'];
        $author   = $rows['AUTHOR'];
        $date = $rows['UPDATE_DATE'];
        $text = $rows['TEXT_CONTENT'];
        $title = $rows['TITLE'];
        $url = $rows['URL'];
        $instance=array('id' => $id, 'type' => $type, 'author' => $author,'update_date' => $date, 'title' => $title, 'url' => $url, 'text' => $text);
        array_push($results,$instance);
    endwhile;
    echo json_encode($results);
	//Closing connection
	$connection->close()
?>