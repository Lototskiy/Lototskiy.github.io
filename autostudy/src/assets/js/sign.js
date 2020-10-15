$item2 = $('.sign img'),
// $item3 = $('.bottom__sign--big img'),
// $item4 = $('.bottom__sign img'),
$container = $('.sign'),
container_w = $container.width(),
container_h = $container.height();

$('body').on('mousemove.parallax', function (event) {
    var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    top = 0;

    left = container_w / 2 - pos_x;
    top = container_h / 2 - pos_y;


    TweenMax.to(
        $item2,
        1, {
            css: {
                transform: 'translateX(' + (left / 60) + 'px) translateY(' + top / 60 + 'px)'
            },
            ease: Expo.easeOut,
            overwrite: 'all'
        },
        );


    TweenMax.to(
        $item3,
        1, {
            css: {
                transform: 'translateX(' + (left / 60) + 'px) translateY(' + top / 60 + 'px)'
            },
            ease: Expo.easeOut,
            overwrite: 'all'
        },
        );


    TweenMax.to(
        $item4,
        1, {
            css: {
                transform: 'translateX(' + (left / 60) + 'px) translateY(' + top / 60 + 'px)'
            },
            ease: Expo.easeOut,
            overwrite: 'all'
        },
        );

});
