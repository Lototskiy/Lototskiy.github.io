if ( document.querySelector('.masters-slider') ) {
var mastersSlider = new Swiper('.masters-slider .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoHeight: true,
	speed: 1000,
	loop: true,
	navigation: {
		nextEl: '.masters-slider .swiper-button-next',
		prevEl: '.masters-slider .swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		1200: {
			slidesPerView: 4,
		}
	},
});

}