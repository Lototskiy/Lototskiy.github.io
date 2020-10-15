if (  document.querySelector('.main-screen__arrow') ) {
	function screenDown(){
		
		var elementid = $(this).attr("data-scroll-block");
		var destination = $("#"+elementid).offset().top;
		$('body').animate({
			scrollTop: destination}, 1000, function(){
				window.animations1.checkScroll();
			});

	}

	document.addEventListener('DOMContentLoaded', function(){ 
		$('.main-screen__arrow').on('click', screenDown);
	});
}