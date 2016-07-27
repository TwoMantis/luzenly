<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $query = "SELECT * FROM posts LEFT JOIN blog_entries ON posts.id = blog_entries.id_post ORDER BY id";
    $posts = $connection->query($query); 
    $results = array();
    WHILE ($rows = mysqli_fetch_array($posts)):
        $type    = $rows['type'];
        $author   = $rows['autor'];
        $date = $rows['update_date'];
        $text = $rows['text_content'];
        $title = $rows['title'];
        $url = $rows['url'];
        $instance=array('type' => $type, 'author' => $author,'update_date' => $date, 'title' => $title, 'url' => $url, 'text' => $text);
        array_push($results,$instance);
    endwhile;
    echo json_encode($results);
	//Closing connection
	$connection->close()
?>