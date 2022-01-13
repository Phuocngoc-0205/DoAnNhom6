$(document).ready(function(){
    $('.image-slider').slick({
      slidesToShow: 4,
      prevArrow: "<button type='button' class='slick-prev slick-arow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next slick-arow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 2
        }
    }, ]
    });
  });