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
        $insertPost = "INSERT INTO POSTS 
        (CREATE_DATE, UPDATE_DATE, AUTHOR, IS_REVIEWED, TITLE, URL, POST_TYPE) 
        VALUES (CURDATE(), CURDATE(), {$idCreator}, 1, '{$title}', '{$url}', '{$type}');";
        $connection->query($insertPost) ;
        if($type=="T"){
            $id = $connection->insert_id;
            $insertText = "INSERT INTO BLOG_ENTRIES 
            (ID_POST, TEXT_CONTENT)
            VALUES ({$id},'{$text}');";
            $connection->query($insertText);
        }        
    }
	//Closing connection
	$connection->close()
?>