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
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
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
        
            <div class="col-md-3 col-md-offset-2 col-sm-4 col-sm-offset-1 col-xs-12">
                <h2 class="p1 active">Player1 X</h2>
                <h2 class="p2">Player2 O</h2>    
                <div class="table">
                  <div class="result"></div></div>
                <div></div>          
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="button restart">Restart Game</div>
                <ul class="painelop">
                  <li>
                    <h4>Change the board color</h4><input type="color" id="color" value='#1f4aad' name="color"></li></ul>
                <div class="button opcoes">Options</div>
                <ul class="count">
                  <li>X WIN<br/><span class="countX">0</li>
                  <li>DRAW<br/><span class="draw ">0</span></li>
                  <li>O WIN<br/><span class="countO">0</span></li>
                </ul>
            
                
            </div>        
            <div id="x" class="null">
              
            </div>
        
  
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>-->    
    
  </body>
</html>