if (document.querySelector('.production-slider')) {

    let interleaveOffset = 0.5;
    var swiper = new Swiper('.production-slider .swiper-container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 50,
        speed: 1700,
        autoHeight: true,
        watchSlidesProgress: true,
        // pagination: {
        //     el: '.production-slider .swiper-pagination',
        //     clickable: true,
        // },

        scrollbar: {
            el: '.production-slider .swiper-scrollbar',
            draggable: true,
        },

        on: {
            init: function () {
                for (let i = 0; i < this.slides.length + 1; i++) {
                    let div = document.createElement('div');
                    document.querySelector('.production-slider .swiper-scrollbar__inner').append(div);
                }
                setTimeout(function(){
                    this.update();
                }.bind(this),1000);
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
    });
}