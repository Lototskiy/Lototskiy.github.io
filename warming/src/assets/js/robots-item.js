if (document.querySelector('.robots')) {
    let btn = document.querySelectorAll('.robots__item-btn');
    let close = document.querySelectorAll('.robots__item-close');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            needTab = this.getAttribute('data-slider');
            if (document.querySelector('.robots-slider--active')) {
                document.querySelector('.robots-slider--active').classList.remove('robots-slider--active');
            }
            document.querySelector('.robots-slider[data-slider="' + needTab + '"]').classList.add('robots-slider--active');
            if (document.querySelector('.robots__item--hidden')) {
                document.querySelector('.robots__item--hidden').classList.remove('robots__item--hidden');
            }
            this.parentNode.classList.add("robots__item--hidden");
        })
    }


    for (var i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            document.querySelector('.robots-slider--active').classList.remove('robots-slider--active');
            document.querySelector('.robots__item--hidden').classList.remove('robots__item--hidden');
        })
    }
};