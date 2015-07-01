
$(function(){
	//Gera Botões X e O
	btnX = "<div class='first'></div><div class='second'></div>";
 	btnO = "<div class='circle'></div>";
 	//contadores
 	countX = 1;
 	countO = 1;
 	
 	//Bool check win X or O
 	winO=0;
 	winX=0;
 	//Vetor tabuleiro
 	vet = [];
 	//Possíveis posições de ganho
 	posWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]; 	
 	//Gerador do Tabuleiro
 	table = $('.table');
 	j=0;	
	for(i=0;i<9;i++){
		vet[i]= i;				
		if(j == i){
	  		table.append("<br style='clear:both'/>");
	  		j+=3;
	  	}
	  	table.append("<div class='pos'></div>");		  	 	
	}
	//Checa vencedor
	function CheckWin(){
		for(i=0;i<posWin.length;i++){
			x = 0; o = 0			
			for(j=0;j<posWin[i].length;j++){
				if($('.pos').eq(posWin[i][j]).hasClass('x')){
					x+=1;
					if(x==posWin[i].length){
						$('.result').show().html('<h2>X GANHOU</h2>');
						$('.countX').html("").append(countX++);
						x=3;
						winX=1;
						$('#x').removeClass('null');
						$('#x').addClass('x');
					}
				}
				else if($('.pos').eq(posWin[i][j]).hasClass('o')){
					o+=1;
				 	if(o==posWin[i].length){
				 		o=3;
				 		$('.mostra').append(''+x+'  '+o+'<br/>');	
				 		winO=1;
				 		$('.result').show().html('<h2>O GANHOU</h2>');
						$('.countO').html("").append(countO++);
						$('#x').removeClass('null');
						$('#x').addClass('o');
					}				
				}					
			}
		}
	}


		
	//Função Checa Jogador//
	function CheckPlayer(){	
			$('.pos').click(function(){
				if($('.p1').hasClass('active')) {
					if($(this).hasClass('x')||$(this).hasClass('o')){}
					else{
						$(this).addClass('x').append(btnX);
						$('.p1').removeClass('active');
						$('.p2').addClass('active');
						CheckWin();		
					}
				}
				else if($(this).hasClass('x')||$(this).hasClass('o')){

				}				
					else{$(this).addClass('o').append(btnO);
						$('.p2').removeClass('active');
						$('.p1').addClass('active');
						CheckWin();						
					}										
			});				
	}
	//Reinicia o jogo
	function RestartGame(){
		$('.restart').click(function(){
			$('.pos').removeClass('x o').html("");
			$('.result').hide("blind");
		
			winX=0;
			winO=0;
		});
	}	
	CheckPlayer();
	RestartGame();
	//*Painel*//
	//Desktop
	$(".opcoes").click(function(){
		$('.painelop').slideToggle();
		changecolor();
	});
	//Troca cor do Tabuleiro
	function changecolor(){
	MyColor = $('#color').val();
	$('.pos').css("background-color",MyColor);
	}

});
