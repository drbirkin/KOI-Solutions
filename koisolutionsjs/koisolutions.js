$(function () {

  AOS.init();

  $(".q1").click(function () {
    $(".cost").slideToggle("slow");
  });

  $(".q2").click(function () {
    $(".restock").slideToggle("slow");
  });

  $(".q3").click(function () {
    $(".support").slideToggle("slow");
  });

  $(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });

  var menu = "close";
  $(".mobile-navbar .menu-toggle").click(function () {

    if (menu === "close") {
      $(this).parent().next(".mobile-nav").css({
        "display": "flex",
        "transform": "translate(0, 0)"
      });
      menu = "open";
    } else {
      $(this).parent().next(".mobile-nav").css({
        "display": "none",
        "transform": "translate(0, -999%)"
      });
      menu = "close";
    }
  });

});