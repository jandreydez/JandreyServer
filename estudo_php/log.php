<?php include "conect_banco.php";
	unset($_SESSION['email']);
	unset($_SESSION['pass']);
	unset($_SESSION['key']);
	$_SESSION['email']= NULL;
	$_SESSION['pass']= NULL;
	$_SESSION['key']= false;
	$_SESSION = array();
	session_destroy();