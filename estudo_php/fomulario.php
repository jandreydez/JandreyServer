<?php include "conect_banco.php";?>
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Formulario PHP ESTUDO</title>
</head>
<body>
	<form action="recebe-dados.php" method="POST">
		Nome<input type="text" name="name">
		<br/>
		Email<input type="text" name="email">
		<br/>
		Senha<input type="password" name="pass">
		<br/>
		<input type="submit"value="Enviar!">


		<?php
		$result = $conexao->query("SELECT * FROM users u");
		if($result){
			while($row = mysqli_fetch_array($result)){
				echo $row['id'];
				echo $row['name'];
				echo $row['email'];
				echo $row['pass'];
				echo "<br/>";
			}
		}		 			
		?>		
	</form>
	<form action="verficia_dados.php" method="POST">
		<input type="text" name="email">
		<input type="password" name="pass">
		<input type="submit">
	</form>
	<?php 
	if(isset($_GET['verifica'])):
			if($_SESSION['key']==true):
			echo "Olá ".$_SESSION['email'];			
			endif;
	endif;
	if(isset($_GET['falha'])):
			echo "ERROR";		
	endif;	
	?>
</body>
</html>