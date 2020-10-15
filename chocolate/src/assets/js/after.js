$item3 = $('.advantages__item-img img'),
    $container3 = $('.advantages'),
    container3_w = $container3.width(),
    container3_h = $container3.height();

$('body').on('mousemove.parallax', function (event) {
    var pos_x = event.pageX,
        pos_y = event.pageY,
        left = 0,
        top = 0;

    left = container3_w / 2 - pos_x;
    top = container3_h / 2 - pos_y;


    TweenMax.to(
        $item3,
        1, {
            css: {
                transform: 'translateX(' + (left / 60 ) + 'px) translateY(' + top / 60  + 'px)'
            },
            ease: Expo.easeOut,
            overwrite: 'all'
        },
    );

});