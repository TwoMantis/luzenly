<?php
	include("lzyGetConnection.php");
	//Code for succesful connection here
	$request = json_decode(file_get_contents("php://input"));
	$nick = $request->nick;	
	$password = $request->password;
	$passwordHash = hash('sha512',$password.'luzenlysaltcc', true);
	$email = $request->email;
	$query = "INSERT INTO ACCOUNTS
	(NICK, PASSWORD, EMAIL, STRIKES, USER_TYPE) 
	VALUES 
	('{$nick}','{$passwordHash}', '{$email}', 0, 'U');";

	if($connection->query($query) === true){
		$responseArray['status'] = 'success';
		$responseArray['msg'] = 'User Created';
	}else{
		$responseArray['status'] = 'error';
		$responseArray['error'] = "Error: " . $insertAccount . "<br>" . $connection->error;
	}
	echo json_encode($responseArray);
	//Closing connection
	$connection->close();
?>