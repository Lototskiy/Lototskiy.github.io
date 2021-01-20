if (document.querySelector('.pool-filters__sort')) {
    let posit = document.querySelectorAll('.pool-filters__sort .pool-filters__position');
    for (var i = 0; i < posit.length; i++) {
        posit[i].addEventListener('click', function () {
            document.querySelector('.pool-filters__position--active').classList.remove('pool-filters__position--active');
            this.classList.add('pool-filters__position--active');
        })
    }
};