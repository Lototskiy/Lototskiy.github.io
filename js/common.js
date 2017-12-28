$(document).ready(function(){
	$('.portfolio_icon').click(function(){
		$('.portfolio_icon').toggleClass('active');
		$('.portfolio_nav').toggleClass('menu')
	});

	//jquery-zoom
	$('.sl2_slide').zoom({
		magnify: 2
	});
	//slick-carousel
	$('.sl').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,		
		cssEase:'ease-in',
		fade:true,
		initialSlide: 3,
		asNavFor: '.sl2'
	});
	
	$('.sl2').slick({
		dots: true,
		arrows: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 7,
		slidesToScroll: 1,
		initialSlide: 3,
		asNavFor: '.sl',
		focusOnSelect: true,
		responsive: [
		  {
			breakpoint: 960,
			settings: {
				slidesToShow: 6
			}
		  },
		  {
			breakpoint: 780,
			settings: {
				slidesToShow: 5,
				centerPadding: '0'
			}
		  },
		  {
			breakpoint: 560,
			settings: {
				slidesToShow: 4,
				centerPadding: '0',
				dots: false
			}
		  }
		]
	});
});
