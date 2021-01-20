if (document.querySelector('.product__tabs-toggle')) {
    $(document).ready(function () {
        $('.product__tabs-toggle').click(function (event) {
            $(this).toggleClass('active').prev().slideToggle(500)
            if ($(this).hasClass('active')) {
                $(this).html('Скрыть');
            } else {
                $(this).html('Раскрыть полностью');
            }
        });
    });
};