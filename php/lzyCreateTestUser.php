<?php
	//Variables to connect to the DB
	$serverName = "localhost";
	$userName = "root";
	$password = "Davidcastro123";
	$dbName = "lzydbtest";
	//Creating connection
	$connection = new mysqli($serverName, $userName, $password,$dbName) ;
	//Checking for errors
	if($connection->connect_error){
		die("Server Error: " . $connection->connect_error);
	} 
	//Code for succesful connection here
	$accountPasswordHash = hash('sha512','password'.'luzenlysaltcc', true);
	$insertAccount = "INSERT INTO account (account_nick, account_password_hash, account_email) VALUES ('accountTester','{$accountPasswordHash}', 'imnotanemail');";
	if($connection->query($insertAccount) === true){
		echo "Everything was right :)";
	}else{
		echo "Error: " . $insertAccount . "<br>" . $connection->error;
	}
	//Closing connection
	$connection->close();
?>
