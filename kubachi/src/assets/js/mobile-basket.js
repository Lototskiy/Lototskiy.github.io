var menu = document.querySelector('.mobile-basket');
var basket = document.querySelectorAll('.header__basket');
var menuWrap = document.querySelector('.mobile-basket__wrap');
var closeMenu = document.querySelector('.mobile-basket__act--close');
for (let i = 0; i < basket.length; i++) {
    basket[i].addEventListener('click', function () {
        window.showBasket();
    });
}


closeMenu.addEventListener('click', function () {
    window.hideBasket();
});


window.showBasket = function () {
    menu.classList.add('mobile-basket--active');
    menu.classList.add('mobile-basket--opacity0');
    raf(function () {
        menu.classList.add('mobile-basket--opacity1');
    });

    function leftMenu() {
        menuWrap.classList.add('mobile-basket__wrap--right0');
        menu.removeEventListener('transitionend', leftMenu);
    }

    menu.addEventListener('transitionend', leftMenu);
}

window.hideBasket = function () {
    menuWrap.classList.remove('mobile-basket__wrap--right0');

    function xxx() {
        menu.classList.remove('mobile-basket--opacity1');
        menu.classList.remove('mobile-basket--opacity0');
        setTimeout(function () {
            menu.classList.remove('mobile-basket--active');
        }, 500);
        menuWrap.removeEventListener('transitionend', xxx);
    }

    menuWrap.addEventListener('transitionend', xxx);
}



function raf(fn) {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {

            fn();
        });
    });
}


document.querySelector('.mobile-basket').addEventListener('click', function (e) {
    if (e.target.closest('.mobile-basket__wrap') == null) {
        window.hideBasket();
    }
});