$(document).ready(function() {
    // var width=document.body.clientWidth;
    // if(width<=768){
     //    $("#cols").addClass('container');
     //    $("#cols").wrap("<div class='row'></div>");
    	// $(".persons").addClass("col-md-3 col-xs-6 .col-sm-6");
	// }else{
     //    $(".persons").removeClass("col-md-3 col-xs-6 .col-sm-6");
	// }

	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// var urls=$('body').querySelector('img').url;
	// alert(urls);
	// for(var i=0;i<urls.length;i++){
	// 	urls[i]=urls[i]+="?timestamp=" + new Date().getTime();
	// }

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});

	$(".content-margin").find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

    window.onload = function(){setTimeout(function(){$(window).scrollTop(0)},5);}
});