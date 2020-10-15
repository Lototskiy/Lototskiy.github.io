window.featuresSlider = new Swiper('.features__slider .swiper-container', {
    speed: 400,
    spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 1,
     navigation: {
    nextEl: '.features__slider .slider-btns__btn--next',
    prevEl: '.features__slider .slider-btns__btn--prev',
  },

	on: {
		init: function(){
			setTimeout(function(){

				let services = document.querySelectorAll('.features__slider .swiper-slide');
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