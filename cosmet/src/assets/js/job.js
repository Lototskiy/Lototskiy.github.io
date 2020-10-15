if (document.querySelector('.job')) {
	let interleaveOffset = 0.5;
	let portfolioSliderSelector1 = '.job .swiper-container';
	let portfolioSliderOptions1 = {
		loop: true,
		slidesPerView: 1,
		loopedSlides: 4,
		centeredSlides: true,
		speed: 1000,
		autoplay: {
			delay: 3000
		},
		autoHeight: true,
		spaceBetween: 90,
		grabCursor: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.job .swiper-button-next',
			prevEl: '.job .swiper-button-prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 20,
			},

			1200: {
				spaceBetween: 75
			}
		},
		on: {
			init: function () {
				this.autoplay.stop();
			},
			progress: function () {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					let slideProgress = swiper.slides[i].progress,
						innerOffset = swiper.width * interleaveOffset,
						innerTranslate = slideProgress * innerOffset;

					swiper.slides[i].querySelector(".slide-bgimg").style.transform =
						"translateX(" + innerTranslate + "px)";
				}
			},
			touchStart: function () {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function (speed) {
				let swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-bgimg").style.transition =
						speed + "ms";
				}
			}
		}
	};

	document.portfolioSlider1 = new Swiper(portfolioSliderSelector1, portfolioSliderOptions1);

};