<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    if($request){
        $idPost = $request->idPost;
        $idUser = $request->idUser;
        $liked = $request->liked;
	
        $query = "INSERT INTO LIKES (ID_POST, ID_USER, LIKED)  
        VALUES ({$idPost}, {$idUser}, {$liked})";
	
        $connection->query($query);
    }
	//Closing connection
	$connection->close()

?>