	<?php 
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	header('Content-type: text/plain; charset=utf-8');
	header('Content-Type: application/json');
	//Variables to connect to the DB
	$serverName = "localhost";
	$userName = "root";
	$password = "";
	$dbName = "lzydbtest";
	//Creating connection
	$connection = new mysqli($serverName, $userName, $password,$dbName);
    //Checking for errors
	if($connection->connect_error){
		echo "Server Error: " . $connection->connect_error;
        die ("");
	} 
	?>