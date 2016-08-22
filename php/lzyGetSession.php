<?php
    include("lzyGetConnection.php");
    session_start();
    $session = array('nick'=> $_SESSION['nick'],
    'type'=>$_SESSION['type'],
    'email'=>$_SESSION['email'],
    'isLogged'=>$_SESSION['isLogged']);
    echo json_encode($session);

?>