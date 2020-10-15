if (document.querySelector('.reviews__slider')) {
	var swiper = new Swiper('.reviews__slider .swiper-container', {
		slidesPerView: 3,
		spaceBetween: 50,
		centeredSlides: true,
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

			1201: {
				slidesPerView: 3,
				spaceBetween: 50
			}
		},
	});
}