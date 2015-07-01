<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">   
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>Login - Jogo da Velha Online</title>
    <!-- Bootstrap -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  
    <link href="assets/css/style.css" rel="stylesheet"> 
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>-->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="assets/vendor/js/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="assets/js/main.js"></script>
  </head>
<body>
	<div class="menu-bar">
		<div class="container">
			<div class="row">
				<div class="col-md-3 login-bar"><span>Jogo da Velha</span> 
				</div>
				<div class="col-md-9">					
						<form action="" method="POST">												
						<label for="email">E-mail</label>
						<input type="text" name="email"id="email">
						<label for="pass">Senha</label>					
						<input type="password" name="pass" id="pass">
						<input type="submit" value="Login" name="login"class="login">					
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-cadastro">		 	
		<div class="container">
			<div class="row">
				<div class="col-md-5"></div>
				<div class="col-md-6 col-md-offset-1 cadastro">
					<form action="" method="POST">														
						<input type="text" name="name"placeholder="Nome"><br/>									
						<input type="text" name="sobrenome" placeholder="Sobrenome"><br/>																	
						<input type="text" name="email"placeholder="Email"><br/>																
						<input type="text" name="senha"placeholder="Senha"><br/>
						<input type="submit" value="Cadastrar">							
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>