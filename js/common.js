$(document).ready(function(){
	$('.slickslider').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		cssEase:'ease',
		dots: true,
		arrows: false,
		pauseOnDotsHover: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
		slidesToScroll: 1,
      }
    }] 
	})
});