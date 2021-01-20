if (document.querySelector('.faq')) {
    window.allow = true;
    $(document).ready(function () {
        $('.faq__item .faq__item-title').on('click', function () {
            if (window.allow) {
                var need = $(this).closest('.faq__item');
                var need_t = $(this);
                var need_c = need.find('.faq__item-text');

                if (need.hasClass('faq__item--active')) {
                    window.allow = false;
                    $(need_c).slideToggle(500, function () {
                        $(need).removeClass('faq__item--active');
                        window.allow = true;
                    });
                } else {
                    if (need.closest('.faq__list').find('.faq__item').is('.faq__item--active')) {
                        var need2 = need.closest('.faq__list').find('.faq__item--active').closest('.faq__item');
                        var need_t2 = need.closest('.faq__list').find('.faq__item--active .faq__item-title');
                        var need_c2 = need.closest('.faq__list').find('.faq__item--active .faq__item-text');

                        window.allow = false;


                        $(need_c2).slideToggle(500, function () {
                            $(need2).removeClass('faq__item--active');
                            $(need_c).slideToggle(500, function () {
                                $(need).addClass('faq__item--active');
                                window.allow = true;

                            });

                        });

                    } else {
                        window.allow = false;
                        $(need_c).slideToggle(500, function () {
                            $(need).addClass('faq__item--active');
                            window.allow = true;
                        });

                    }

                }

            }

        });
    });
}