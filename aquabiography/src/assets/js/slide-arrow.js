var prev = $(".project-slider__button-prev"),
  next = $(".project-slider__button-next"),
  slide = $(".swiper-slide");

var posX = 0,
  posY = 0;

var mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(prev, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });
    TweenMax.set(next, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });
  }
});

$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// $(".swiper-slide").on("mouseenter", function () {
//   if (this.classList.contains("swiper-slide-prev")) {
//     prev.addClass("active");
//   }
//   if (this.classList.contains("swiper-slide-next")) {
//     next.addClass("active");
//   }
//   if (this.classList.contains("swiper-slide-active")) {
//     slide.addClass("active");
//   }
// });

// $(".swiper-slide").on("mouseleave", function () {
//     prev.removeClass("active");
//     next.removeClass("active");
//     if (this.classList.contains("swiper-slide-active")) {
//       slide.removeClass("active");
//     }
// });

$(".next-slide").on("mousedown", function () {
  next.addClass("scale");
});
$(".next-slide").on("mouseup", function () {
  next.removeClass("scale");
});
$(".prev-slide").on("mousedown", function () {
  prev.addClass("scale");
});
$(".prev-slide").on("mouseup", function () {
  prev.removeClass("scale");
});



$(".next-slide").on("mouseenter", function () {
  next.addClass("active");
});
$(".next-slide").on("mouseleave", function () {
  next.removeClass("active");
});

$(".next-slide").on("click", function () {
  document.portfolioSlider1.slideNext();
});

$(".prev-slide").on("mouseenter", function () {
  prev.addClass("active");
});
$(".prev-slide").on("mouseleave", function () {
  prev.removeClass("active");
});

$(".prev-slide").on("click", function () {
  document.portfolioSlider1.slidePrev();
});

$(".next-slide").on("mousemove", function () {
  if (next.hasClass("swiper-button-disabled")) {
    next.removeClass("active");
  }
});
$(".prev-slide").on("mousemove", function () {
  if (prev.hasClass("swiper-button-disabled")) {
    prev.removeClass("active");
  }
});



// var slideNext = document.querySelectorAll(".swiper-slide");

// for (var i = 0; i < slideNext.length; i++) {
//   slideNext[i].onclick = function () {
//     if (this.classList.contains("swiper-slide-next")) {
//       document.portfolioSlider1.slideNext();
//     }
//     if (this.classList.contains("swiper-slide-prev")) {
//       document.portfolioSlider1.slidePrev();
//     }
//   };
// }