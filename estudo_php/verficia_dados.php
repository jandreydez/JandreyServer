
<?php include "conect_banco.php";


$email = $_POST["email"];
$pass = $_POST["pass"];

$query = 'SELECT * FROM users u WHERE pass="'.$pass.'" AND email="'.$email.'";';
$result = $conexao->query($query);
$row = mysqli_fetch_array($result);

if($row){
	$_SESSION['email'] = $email;
	$_SESSION['pass'] = $pass;
	$_SESSION['key'] = true;
	header("location: ./fomulario.php?verifica=sessao");
}
else{
	header("location: ./fomulario.php?falha=erro");

}