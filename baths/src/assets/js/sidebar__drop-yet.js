if (document.querySelector('.sidebar__drop-yet')) {
    $(document).ready(function () {
        $('.sidebar__drop-yet').click(function (event) {
            $(this).prev().slideToggle(500)
        });
    });
};