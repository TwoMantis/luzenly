<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    if($request){
        $id = $request->id;
        $title = $request->title;
        $url = $request->url;
        $text = $request->text;
        $query = "UPDATE posts, blog_entries 
        SET posts.title={$title}, 
        post.url={$url},
        post.update_date=CURDATE(), 
        blog_entires.text_content={$text}
        WHERE posts.id = blog_entries.id 
        AND posts.id = {$id}";
        $connection->query($query);
    }
	//Closing connection
	$connection->close()

?>