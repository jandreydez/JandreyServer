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
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="assets/js/main.js"></script>
  </head>
  <body><h2 class="p1 active">Jogador 1 
        <div class="pos bgnone">          
            <div class="first"></div>
            <div class="second"></div>          
        </div>
          <h2 class="p2">Jogador 2 
        <div class="pos bgnone">          
            <div class="circle"></div>         
        </div>
      </h2>
    <div class="container">
      <div class="row">

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
        <div class="col-md-3">          
      <div class="restart">Restart Game</div>
      <div class="table"></div>
<!--------------Gera o Tabuleiro------------------>
<?php //Table//
  /*for($i=0;$i<3;$i++){echo"<br style='clear:both'/>";
    for($j=0;$j<3;$j++){
      echo"<div class='".$i.$j." pos'>".$i.$j."</div>";
    }
  }*/
?>
<!------------------------------------------------>
          
        </div>
      </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>    
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>