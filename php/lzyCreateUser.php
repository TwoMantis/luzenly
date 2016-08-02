<?php
	include("lzyGetConnection.php");
	//Code for succesful connection here
	$request = json_decode(file_get_contents("php://input"));
	$nick = $request->nick;	
	$password = $request->password;
	$passwordHash = hash('sha512',$password.'luzenlysaltcc', true);
	$email = $request->email;

	$query = "INSERT INTO accounts
	(nick, password, email, strikes, type) 
	VALUES 
	('{$nick}','{$accountPasswordHash}', '{$email}', 0, 'U');";

	if($connection->query($query) === true){
		echo "User Created!";
	}else{
		echo "Error: " . $insertAccount . "<br>" . $connection->error;
	}
	//Closing connection
	$connection->close();
?>