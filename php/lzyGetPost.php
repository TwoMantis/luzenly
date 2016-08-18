<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    $id = $request->id;
    $query = "SELECT * FROM POSTS LEFT JOIN BLOG_ENTRIES ON POSTS.ID = BLOG_ENTRIES.ID_POST WHERE POSTS.ID = {$id}";
    $post = $connection->query($query); 
    $results = array();
    WHILE ($rows = mysqli_fetch_array($post)):
        $type    = $rows['POST_TYPE'];
        $author   = $rows['AUTHOR'];
        $date = $rows['UPDATE_DATE'];
        $text = $rows['TEXT_CONTENT'];
        $title = $rows['TITLE'];
        $url = $rows['URL'];
        $instance=array('type' => $type, 'author' => $author,'update_date' => $date, 'title' => $title, 'url' => $url, 'text' => $text);
        array_push($results,$instance);
    endwhile;
    echo json_encode($results);
	//Closing connection
	$connection->close()
?>