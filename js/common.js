$(document).ready(function(){
	$('.sl').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,		
		cssEase:'ease',
		fade:true,
		asNavFor: '.sl2',
		initialSlide: 1
	});
	
	$('.sl2').slick({
		dots: true,
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.sl',
		focusOnSelect: true,
		initialSlide: 1,
		responsive: [
		  {
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				centerPadding: '0px'
			}
		  }
		]
	});
});