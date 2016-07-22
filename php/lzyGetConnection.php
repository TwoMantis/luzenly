	//Variables to connect to the DB
	$serverName = "localhost";
	$userName = "root";
	$password = "Davidcastro123";
	$dbName = "lzydbtest";
	//Creating connection
	$connection = new mysqli($serverName, $userName, $password,$dbName);
    //Checking for errors
	if($connection->connect_error){
		echo "Server Error: " . $connection->connect_error;
        die ("");
	} 