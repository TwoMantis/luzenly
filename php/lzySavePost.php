<?php

    include("lzyGetConnection.php");

	//Code for succesful connection here

    $request = json_decode(file_get_contents('php://input'));


    if($request){
        $idCreator = $request->idCreator;
        $title = $request->title;
        $type = trim($request->type);
        $url = $request->url;
        $text = $request->text;
        $insertPost = "INSERT INTO posts 
        (create_date, update_date, author, is_reviewed, title, url, type) 
        VALUES (CURDATE(), CURDATE(), {$idCreator}, 1, '{$title}', '{$url}', '{$type}');";
        $connection->query($insertPost) ;
        if($type=="T"){
            $id = $connection->insert_id;
            $insertText = "INSERT INTO blog_entries 
            (id_post, text_content)
            VALUES ({$id},'{$text}');";
            $connection->query($insertText);
        }        
    }
	//Closing connection
	$connection->close()
?>