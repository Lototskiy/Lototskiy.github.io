window.servicesSlider = new Swiper('.services__slider .swiper-container', {
	speed: 400,
	spaceBetween: 20,
	autoHeight: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.services__slider .slider-btns__btn--next',
		prevEl: '.services__slider .slider-btns__btn--prev',
	},
	on: {
		init: function(){
			setTimeout(function(){

				let services = document.querySelectorAll('.services__slider .swiper-slide');
				let bigHeight = 0;
				for (var i = 0; i < services.length; i++) {
					if ( services[i].clientHeight > bigHeight ) {
						bigHeight = services[i].clientHeight;
					}
				}

				for (var i = 0; i < services.length; i++) {
					services[i].style.height = bigHeight + "px";
				}
			},200);
		},
	}
});