var follow = $('.cursor-follower');


function moveCircle(e) {
	TweenLite.to(follow, 0.7, {
      x: e.clientX,
      y: e.clientY
  });  
}

function hoverFunc(e) {
  TweenLite.to(follow, 0.3, {
      scale: 3
  });  
}

function unhoverFunc(e) {
  TweenLite.to(follow, 0.3, {
      scale: 1
  });  
}


function whiteFunc(e) {
  follow.removeClass("cursor-follower--dark");
  follow.addClass("cursor-follower--white");
}

function unwhiteFunc(e) {
  follow.removeClass("cursor-follower--white");
  if ( event.target.closest('.cursor-dark') ) {
   follow.addClass("cursor-follower--dark");
  }
}


function darkFunc(e) {
  follow.removeClass("cursor-follower--white");
  follow.addClass("cursor-follower--dark");
}

function undarkFunc(e) {
  follow.removeClass("cursor-follower--dark");
}



$(".cursor-hide").on("mouseenter", function () {
  follow.addClass("cursor-follower--hide");
});

$(".cursor-hide").on("mouseleave", function () {
  follow.removeClass("cursor-follower--hide");
});

$(window).on('mousemove', moveCircle);

$(".cursor-hover").hover(hoverFunc, unhoverFunc);
$(".cursor-white").hover(whiteFunc, unwhiteFunc);
$(".cursor-dark").hover(darkFunc, undarkFunc);

