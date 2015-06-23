<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">   
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>Jogo da Velha</title>
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
    <script src="assets/js/main.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="row relative">
        <!--<div class="pos">
          <div class="btn-x">
            <div class="first"></div>
            <div class="second"></div>
          </div>
        </div>
        <div class="pos">
          <div class="btn-o">
            <div class="circle"></div>
          </div>
        </div>-->
        
            <div class="col-md-3 col-md-offset-3 col-sm-4">
                <h2 class="p1 active">Player1 X</h2>
                <h2 class="p2">Player2 O</h2>    
                <div class="table">
                  <div class="result"></div></div>
                <div></div>          
            </div>
            <div class="col-md-4">
                <div class="button restart">Restart Game</div>
                <ul class="painelop">
                  <li>
                    <h4>Selecione a cor do Tabuleiro</h4><input type="color" id="color" value='#639639' name="color"></li></ul>
                <div class="button opcoes">Options</div>
                <ul class="count">
                  <li class="countX">0</li>
                  <li>0</li>
                  <li>0</li>
                </ul>

                
            </div>        
              
        
  
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>-->    
    
  </body>
</html>