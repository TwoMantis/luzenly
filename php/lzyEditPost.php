<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    if($request){
        $id = $request->id;
        $title = $request->title;
        $url = $request->url;
        $text = $request->text;
        /*
        $query = "UPDATE POSTS, BLOG_ENTRIES 
        SET POSTS.TITLE = '{$title}', 
        POSTS.URL = '{$url}',
        POSTS.UPDATE_DATE = CURDATE(), 
        BLOG_ENTRIES.TEXT_CONTENT = {$text}
        WHERE POSTS.ID = BLOG_ENTRIES.ID 
        AND POSTS.ID = {$id}"; 
        */
        
        $query = "UPDATE POSTS 
        SET TITLE = '{$title}', 
        URL = '{$url}',
        UPDATE_DATE = CURDATE()
        WHERE ID = {$id}"; 
        
        $connection->query($query);
    }
	//Closing connection
	$connection->close()

?>