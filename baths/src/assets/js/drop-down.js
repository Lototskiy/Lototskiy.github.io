let link = document.querySelector('.sidebar__nav-item--equipment');
let drop = document.querySelector('.sidebar__drop--equipment');

$(function () {
    $(link).mouseover(function () {
        $(drop).addClass('active')
    });

    $(link).mouseout(function () {
        $(drop).removeClass('active')
    });
    $(drop).mouseover(function () {
        $(this).addClass('active')
    });

    $(drop).mouseout(function () {
        $(this).removeClass('active')
    });
});

let linkMob = document.querySelector('.mobile-menu .sidebar__nav-item--equipment');
let dropMob = document.querySelector('.mobile-menu .sidebar__drop--equipment');

$(function () {
    $(linkMob).mouseover(function () {
        $(dropMob).addClass('active')
    });

    $(linkMob).mouseout(function () {
        $(dropMob).removeClass('active')
    });
    $(dropMob).mouseover(function () {
        $(this).addClass('active')
    });

    $(dropMob).mouseout(function () {
        $(this).removeClass('active')
    });
});