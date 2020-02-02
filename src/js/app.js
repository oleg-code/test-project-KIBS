$(document).ready(function() {
  $(".slick-carousel").slick({
    dots: true,
    dotsClass: "carousel__indicators",
    customPaging: function(slider, i) {
      return '<div class="carousel__indicator-item"></div>';
    },
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    swipeToSlide: true,
    infinite: false,
    slidesToShow: 1,
    arrows: false
  });

  validateEmailFild();
});
