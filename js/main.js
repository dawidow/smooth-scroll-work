$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("nav").addClass("main-nav-scroll");
    } else {
      $("nav").removeClass("main-nav-scroll");
    }
  });
});

