if (document.querySelector('.doctors')) {
    let tab = document.querySelectorAll('.doctors .doctors__doctor');

    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function () {
            needTab = this.getAttribute('data-doctor');
            document.querySelector('.doctors__tab--active').classList.remove('doctors__tab--active');
            document.querySelector('.doctors__tab[data-doctor="' + needTab + '"]').classList.add('doctors__tab--active');
        })
    }
};