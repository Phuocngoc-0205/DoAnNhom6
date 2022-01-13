$(document).ready(function() {
    $('.image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        inFinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev slick-arow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2
            }
        }, ]
    });
});