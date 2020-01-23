$( document ).ready(function() {
	"use strict";
	
    $(".Big-Char-Right").mouseenter(function(){
        $(".Payam-Ghorbani-Character").attr("src", "images/Payam-right-min.gif");
	}).mouseleave(function(){
	    $(".Payam-Ghorbani-Character").attr("src", "images/Payam-right-reverse-min.gif");
	});
	
	$(".Big-Char-Left").mouseenter(function(){
	    $(".Payam-Ghorbani-Character").attr("src", "images/Payam-left-min.gif");
	}).mouseleave(function(){
	    $(".Payam-Ghorbani-Character").attr("src", "images/Payam-left-reverse-min.gif");
	});
	
	$(".logo-image").click(function(){
		if($("#BGContainer, #MainContent").hasClass("BlurBG")){
			$("#BGContainer, #MainContent").removeClass("BlurBG");
		}else{
			$("#BGContainer, #MainContent").addClass("BlurBG");
		}
		
		
		
		if($("#BGContainer .logo, #MainContent .logo").hasClass("d-none")){
			$("#BGContainer .logo, #MainContent .logo").removeClass("d-none");
		}else{
			$("#BGContainer .logo, #MainContent .logo").addClass("d-none");
		}
		
		if($("#BGContainer .logo-image, #MainContent .logo-image").hasClass("d-none")){
			$("#BGContainer .logo-image, #MainContent .logo-image").removeClass("d-none");
		}else{
			$("#BGContainer .logo-image, #MainContent .logo-image").addClass("d-none");
		}
		
		if($("#BGContainer .Newsletter-Url").hasClass("d-none")){
			$("#BGContainer .Newsletter-Url").removeClass("d-none");
		}else{
			$("#BGContainer .Newsletter-Url").addClass("d-none");
		}
		
		
		if($("#BGContainer .Social-Networks, #MainContent .loSocial-Networks").hasClass("d-none")){
			$("#BGContainer .Social-Networks, #MainContent .loSocial-Networks").removeClass("d-none");
		}else{
			$("#BGContainer .Social-Networks, #MainContent .loSocial-Networks").addClass("d-none");
		}
		
		
		$(".MenuBox").fadeToggle(500);
	});
	
	$(".PlayButton").click(function(){
		$(".BlackBackgroundTransparent").fadeIn(300);
	});
	
	$(".BlackBackgroundTransparent > .WorkVideoContainer > .CloseCross").click(function(){
		$(".BlackBackgroundTransparent").fadeOut(300);
		$(".WorkVideoContainer > iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	});
	
	
	
	/*$(".Payam-Ghorbani-Character").attr("src", "images/Payam-opening-min.gif");
        setTimeout(function(){
            $(".loading").fadeOut(400);
        }, 500);*/
	
});

window.onload = function () {
    $(".Payam-Ghorbani-Character").attr("src", "images/Payam-opening-min.gif");
    setTimeout(function(){
        $(".loading").fadeOut(400);
    }, 500);
};