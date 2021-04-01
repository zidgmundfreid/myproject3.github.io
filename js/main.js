$(function () {
    
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        infinite: true,
        verticalSwiping: true
        });
    
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

});
