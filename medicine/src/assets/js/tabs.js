if (document.querySelector('.tabs')) {
    let tab = document.querySelectorAll('.tabs__item');

    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function () {
            needTab = this.getAttribute('data-tab');
            document.querySelector('.tabs__content--active').classList.remove('tabs__content--active');
            document.querySelector('.tabs__content[data-tab="' + needTab + '"]').classList.add('tabs__content--active');
            document.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
            document.querySelector('.tabs__item[data-tab="' + needTab + '"]').classList.add('tabs__item--active');
        })
    }
};