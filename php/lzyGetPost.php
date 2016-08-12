<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    $id = $request->id;
    $query = "SELECT * FROM posts LEFT JOIN blog_entries ON posts.id = blog_entries.id_post WHERE posts.id = {$id}";
    $post = $connection->query($query); 
    $results = array();
    WHILE ($rows = mysqli_fetch_array($post)):
        $type    = $rows['type'];
        $author   = $rows['author'];
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