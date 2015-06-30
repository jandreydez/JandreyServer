<?php include "conect_banco.php";

$name = $_POST["name"];
$email = $_POST["email"];
$pass = $_POST["pass"];

$query = 'INSERT INTO users VALUE(NULL, "'.$name.'", "'.$email.'", "'.$pass.'")';
$conexao->query($query);

header("location: ./fomulario.php");