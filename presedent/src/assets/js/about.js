  if ( document.querySelector('.about__slider') ) {
    let interleaveOffset = 0.5;

    let aboutSliderSelector1 = '.about__slider .swiper-container';
    let aboutSliderOptions1 = {
      loop: true,
      speed:1000,
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.about .slider-btns__btn--next',
        prevEl: '.about .slider-btns__btn--prev',
      },
      pagination: {
        el: '.about__slider .swiper-pagination',
        type: 'bullets',
      },
      breakpoints: {
        320: {
          spaceBetween: 40
        },
        640: {
          spaceBetween: 80
        }
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;

            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
            speed + "ms";
          }
        },
      }
    };


    let aboutSlider1 = new Swiper(aboutSliderSelector1, aboutSliderOptions1);

    $(document).ready(function(){
      
      setTimeout(function(){
        aboutSlider1.update();
      },100);
    });

  }
