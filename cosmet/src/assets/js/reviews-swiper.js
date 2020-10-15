if ( document.querySelector('.reviews-swiper') ) {
var swiper = new Swiper('.reviews-swiper', {
	slidesPerView: 3,
	spaceBetween: 50,
	centeredSlides: true,
	loopedSlides: 4,
	speed: 1000,
	autoplay: {
		delay: 3000
	},
	loop: true,
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
	breakpoints: {
		320: {
			spaceBetween: 20,
			slidesPerView: 1,
		},

		1200: {
			slidesPerView: 3,
			spaceBetween: 50
		}
	},
});
}