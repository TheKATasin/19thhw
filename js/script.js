$(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        nextArrow: '<i class="fa-solid fa-chevron-right next"></i>',
        prevArrow: '<i class="fa-solid fa-chevron-left prev"></i>',
        dots: true,
        pauseOnFocus: false,
        pauseOnDotsHover: true,
        pauseOnHover: false,
    });
});