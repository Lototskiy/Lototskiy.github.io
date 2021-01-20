$(document).ready(function () {

    window.allow = true;

    $('.toogles__item-title').on('click', function () {
        if (window.allow) {

            window.allow = false;
            var needNumber = $(this).attr('data-toogles');
            var need_t = $(this);
            var need_w = need_t.closest('.toogles__wrap');
            var need_i = need_w.find('.toogles__item[data-toogles="' + needNumber + '"]');
            var need_c = need_i.find('.toogles__item-content');

            var lastNumber = need_w.find('.toogles__item--active').attr('data-toogles'); //+
            var last_t = need_w.find('.toogles__item-title--active'); //+
            var last_i = need_w.find('.toogles__item--active'); // +
            var last_c = last_i.find('.toogles__item-content'); // +
            if (need_i.hasClass('toogles__item--active')) {
                window.allow = true;
            } else {
                $(last_t).removeClass('toogles__item-title--active');
                $(need_t).addClass('toogles__item-title--active');

                $(last_c).fadeToggle(500, function () {

                    $(last_i).removeClass('toogles__item--active');

                    $(need_c).fadeToggle(500, function () {
                        $(need_i).addClass('toogles__item--active');
                        window.allow = true;
                    });

                });
            }

        }

    });
});