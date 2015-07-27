$(function(){
//Bar2-SobreNós// 
	//slider// 
	$('.owl-carousel').owlCarousel({
	    items:1,
	    margin:0,
	    autoHeight:true,	    
	});
  	//setTimeout(function(){
	$(".list-sobre li").each(function(index){		
		$('.list-sobre li').eq(index).addClass('b'+index);		
	});
  	//},500);
	$(".owl-dot").each(function(index){		
		$('.owl-dot span').eq(index).addClass('n'+index);
	});
	$(".list-sobre li").each(function(index){		
		$(".b"+index).click(function(){			
			$(".n"+index).trigger('click');
		});
	});	
	$(".imgx").click(function(){
		$(".n0").trigger("click");
	});
	//Counter
	var options = {
	  useEasing : true, 
	  useGrouping : true, 
	  separator : '.', 
	  decimal : '.', 
	  prefix : '', 
	  suffix : '' 
	};
	$('.toys').hover(function() {		
		$('.dates').stop().slideDown("swing");
		$('.list-sobre').stop().slideUp("swing");
		var ativos = new CountUp("ativos", 0, 6606, 0, 1.5, options);
		ativos.start();
		var assistidos = new CountUp("assistidos", 0, 1097, 0, 1.5, options);
		assistidos.start();		
	}, function() {
		$('.dates').stop().slideUp("swing");
		$('.list-sobre').stop().slideDown("swing");
	});
	$('.dates').hover(function() {		
		$('.dates').stop().slideDown("swing");
		$('.list-sobre').stop().slideUp("swing");		
	}, function() {
		$('.dates').stop().slideUp("swing");
		$('.list-sobre').stop().slideDown("swing");
	});
	//Planos Circles//
		//Animated Circle//
		cExit = 'bounceOut';
		cEnter = 'bounceIn';
		//Animated Content//
		coExit = 'bounceOutDown';
		coEnter = 'bounceInUp';		//

	plano = $('.col-md-6.text-center');//Grids Circle//
	op = $('.op');// Circle Planos OP
	r = $('.r');//Circle Planos R
	contentop = $('.contentop');//Conteudo Texto PLANOS OP
	contentr = $('.contentr');//Conteudo Texto PLANOS R
	//Effect OP
	op.click(function(){
		if(plano.hasClass('checked')){
			$('.rcircle').show();
			plano.addClass(cExit);
			$(this).removeClass('opchecked');
			$('.circle').removeClass('circle-op');			
			contentop.addClass(coExit);
			setTimeout(function(){
			plano.removeClass(cExit).removeClass('col-md-offset-3 checked');
			plano.addClass(cEnter);
			contentop.hide().removeClass(coExit);
			$('.textr').show();
			},1000);
			$('.planos-list').fadeIn(1000);			
		}
		else{
			$('.rcircle').hide();
			$(this).addClass('opchecked');
			$('.circle').addClass('circle-op');
			plano.addClass(cExit);
			setTimeout(function(){
			plano.removeClass(cExit);	
			plano.addClass('col-md-offset-3 checked').addClass(cEnter);
			contentop.show().addClass(coEnter);	
			$('.textr').hide();			
			},1000);
			$('.planos-list').fadeOut(1000);		
		}
	});
	//Effect R
	r.click(function(){
		if(plano.hasClass('checked')){
			$('.opcircle').show();		
			plano.addClass(cExit);
			$(this).removeClass('rchecked');
			$('.circle').removeClass('circle-r');			
			contentr.addClass(coExit);
			setTimeout(function(){
			plano.removeClass(cExit).removeClass('col-md-offset-3 checked');
			plano.addClass(cEnter);
			contentr.hide().removeClass(coExit);
			$('.textop').show();						
			},1000);
			$('.planos-list').fadeIn(1000);
		}
		else{	
			$('.opcircle').hide();		
			$(this).addClass('rchecked');
			$('.circle').addClass('circle-r');
			plano.addClass(cExit);
			setTimeout(function(){
			plano.removeClass(cExit);	
			plano.addClass('col-md-offset-3 checked').addClass(cEnter);
			contentr.show().addClass(coEnter);
			$('.textop').hide();								
			},1000);
			$('.planos-list').fadeOut(1000);		
		}
	});		
	//Planos List//	
	$('.planos-list li').click(function(){
		if($(this).hasClass('first')){}			
		else {
			$('.planos-list li').removeClass('active first').animate({marginLeft:"110px"},500);		
			$('.planos-list li span').addClass('fadeOutLeftBig');
			$(this).addClass('active first');					
			$(this).slideUp(200,function(){
				$(this).insertBefore('.planos-list li:first-child');
				$(this).find('span').css("display","block").addClass('animated bounceInRight').removeClass('fadeOutLeftBig');
			}).slideDown(200);}		
						
	});
	//Educaprev//
		//Bar3-Educaprev PrevButtons//
		$(".bar3-educaprev .prevbutton").each(function(index){		
		$('.bar3-educaprev .prevbutton').eq(index).addClass('b'+index);		
		});
	  	//},500);
		$(".owl-dot").each(function(index){		
			$('.owl-dot span').eq(index).addClass('n'+index);
		});
		$(".bar3-educaprev .prevbutton").each(function(index){		
			$(".b"+index).click(function(){			
				$(".n"+index).trigger('click');
				$(".prevbutton").removeClass('ativo');
				$(this).addClass('ativo');
			});
		$(".bar3-educaprev .prevbutton.b0").addClass('ativo');
		});

		////Bar2-Educaprev linha do tempo//
		$(".bar2-educaprev").niceScroll();		
		$('.age li').hover(function() {
			$(this).addClass('animated pulse infinite');
			position = $(this).offset();
			$('.agebox').css({top:position.top+150,left:position.left+55}).fadeIn();
			left = $('.agebox').css(left);
		}, function() {
			$('.agebox').hide();
			$(this).removeClass('animated pulse infinite');
		});
		//Bar4-Educaprev
		$(".bar4-educaprev ul li").each(function(index){		
		$('.bar4-educaprev ul li').eq(index).addClass('x'+index);		
		});
	  	//},500);
		$(".entidade-content").each(function(index){		
			$('.entidade-content').eq(index).addClass('y'+index);
		});
		$(".bar4-educaprev ul li").each(function(index){		
			$(".x"+index).click(function(){	
				if($(this).hasClass('ativo')){							
				}
				else{
					$('.entidade-content').addClass('fadeInRight animated');					
						$('.entidade-content').hide();
						$(".y"+index).show();
				}
			});
		});
		$('.bar4-educaprev ul li:first-child').addClass('ativo first');
		$('.bar4-educaprev ul li').click(function(){
			if($(this).hasClass('first')){}	
			else {	
				$('.bar4-educaprev ul li').removeClass('ativo first');
				$(this).addClass('ativo first');
				//setTimeout(function(){
					$(this).hide(0,function(){
						$(this).insertBefore('.bar4-educaprev ul li:first-child');
					}).addClass('flipInX animated').show();}
				//},1000);
		});
});
	