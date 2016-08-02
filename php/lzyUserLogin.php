<?php
    include("lzyGetConnection.php");
	//Code for succesful connection here
    $request = json_decode(file_get_contents('php://input'));
    $email = $request->email;
    $password = mysql_real_escape_string($request->password);
    $passwordHash = hash('sha512',$password.'luzenlysaltcc', true);
    session_start();
    
    $query = "SELECT id,nick,type FROM accounts 
    WHERE accounts.email = {$email} AND accounts.password = {$passwordHash};";

    $checkResult = $connection->query($query); 
   // $id;


    if(mysql_num_rows($checkResult) == 1){
        $row = mysqli_fetch_array($checkResult);
        //$id = $row['id'];
        $nick = $row['nick'];
        $type = $row['type'];
        $_SESSION['nick'] = $nick;
        $_SESSION['type'] = $type;
        $_SESSION['email'] = $email;
        $_SESSION['logged'] = 1;
        $userData = array('nick' => $nick, 'type' => $type, 'email' => $email, 'logged' => $logged);
        echo json_encode($userData);
    }

    
	//Closing connection
	$connection->close()
?>