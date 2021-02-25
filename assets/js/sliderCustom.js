$(document).ready(function () {
  // Owl Carousel Customization
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    autoplay: true,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoHeight: true,
    responsive: {
      0: { items: 1, dots: true, nav: true },
      600: { items: 1, dots: true, nav: true },
      1000: { items: 2, dots: true, nav: true },
    },
  });

  // Slider Carousel Customization
  $(".carousel-control-next").on("click", function (e) {
    e.preventDefault();
    $(".carousel").carousel("next");
  });
  $(".carousel-control-prev").on("click", function (e) {
    e.preventDefault();
    $(".carousel").carousel("prev");
  });
  $("#gymSlideImg").hover(
    function () {
      $("#gymSlideCont").carousel("pause");
    },
    function () {
      $("#gymSlideCont").carousel("cycle");
    }
  );
});
