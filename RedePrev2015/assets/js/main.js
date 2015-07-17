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
	


});
 
