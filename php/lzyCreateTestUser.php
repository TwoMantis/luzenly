<?php
	include("lzyGetConnection.php");
	//Code for succesful connection here
	$accountPasswordHash = hash('sha512','password'.'luzenlysaltcc', true);
	$insertAccount = "INSERT INTO accounts (nick, password, email, strikes, type) 
	VALUES ('accountTester','{$accountPasswordHash}', 'imnotanemail', 0, 'M');";
	if($connection->query($insertAccount) === true){
		echo "Everything was right :)";
	}else{
		echo "Error: " . $insertAccount . "<br>" . $connection->error;
	}
	//Closing connection
	$connection->close();
?>