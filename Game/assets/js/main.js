
$(function(){
	
	///Botões//			
		//var addO = $('.pos').click(function(){$(this).append(btnO);});
		//var addX = $('.pos').click(function(){$(this).append(btnX);});
	//Gera Botao X
	btnX = "<div class='first'></div><div class='second'></div>";
 	//Gera Botao O
 	btnO = "<div class='circle'></div>"; 	
 	vet = [];
 	//Possiveis posições de ganhar
 	posWin = [ 	
 				[0,1,2],[3,4,5],[6,7,8],
 				[0,3,6],[1,4,7],[2,5,8],
 				[0,4,8],[6,4,2]			
 										]; 	
 	//Gera o Tabuleiro//
 	table = $('.table');
 	var i,j = 0;	
	for(i=0;i<9;i++){
		vet[i]= i;				
		if(j == i){
	  		table.append("<br style='clear:both'/>");
	  		j+=3;
	  	}	  	
	  	table.append("<div class='pos "+vet[i]+"'>"+vet[i]+"</div>");		  	 	
	}
	//Função Checa Jogador//
	function CheckPlayer(){		
			$('.pos').click(function(){
				if($('.p1').hasClass('active')) {
					if($(this).hasClass('x')||$(this).hasClass('o')){				
						
					}
					else{$(this).addClass('x').append(btnX);
						$('.p1').removeClass('active');
						$('.p2').addClass('active');
					}
				}
				else{
					if($(this).hasClass('x')||$(this).hasClass('o')){				
						
					}
					else{$(this).addClass('x').append(btnO);
						$('.p2').removeClass('active');
						$('.p1').addClass('active');
					}
				}
						
			});
				
	}
	//Reinicia o jogo
	function RestartGame(){
		$('.restart').click(function(){
			$('.pos').removeClass('x');
		});
	}
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//CHAMA FUNÇÔES//
	RestartGame();
	CheckPlayer();
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////
});
