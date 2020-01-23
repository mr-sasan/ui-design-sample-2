$( document ).ready(function() {
	"use strict";
    var owl = $('.owl-carousel');
	owl.on('drag.owl.carousel',
		function() {
		  $(".work-item").addClass('cursor_grab');
		});
	owl.on('dragged.owl.carousel',
		function() {
		  $(".work-item").removeClass('cursor_grab');
		});
	
	
	owl.owlCarousel({
		dots: true,
		autoWidth: true,
		checkVisibility: false,
	});
	
	
    owl.on('mousewheel', '.owl-stage', function (e) {
        console.log(e);
        if (e.deltaY>0) {
            owl.trigger('prev.owl');
        } else {
            owl.trigger('next.owl');
        }
        e.preventDefault().delay(500);
    });
	
	
	
	$(".tags-big > li").click(function(){
		$(".loading").fadeIn();
		$(".tags-big > li").removeClass("tag-active");
		$(this).addClass("tag-active");
		var tag = $(this).text().toLowerCase();
		$(".work-item").each(function(){
			if(tag === "all"){
				$(this).removeClass('d-none');
			}else{
				if($(this).find('ul.tags').first().attr('data-tags').toLowerCase().indexOf(tag) === -1){
					$(this).addClass('d-none');
				}else{
					$(this).removeClass('d-none');
				}
			}
		});
		owl.trigger('refresh.owl.carousel');
		owl.trigger('to.owl.carousel', 0);
		setTimeout(function(){
			$(".loading").fadeOut();
		},500);
		
	});
	
	$(".Works-Section .owl-carousel").append('<span class="drag-title">Drag to view more works</span>');
});	