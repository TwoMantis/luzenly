<?php
    include("lzyGetConnection.php");

	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    $idCreator = $request->creator;
    $videoUrl = $request->videoLink;

    if($request){
        $insertPost = "INSERT INTO post (post_date, post_autor, post_status) 
        VALUES (CURDATE(),{$idCreator}, 1);";
        $connection->query($insertPost);

        $postIndex = $connection->insert_id;
        
        $insertVideo = "INSERT INTO video (id_post, video_url) VALUES ({$postIndex}, '{$videoUrl}');";
        $connection->query($insertVideo);
    }
	//Closing connection
	$connection->close();

?>