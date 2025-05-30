/*
Author       : theme_ocean 
Template Name: Jannat - Personal Portfolio/CV HTML Template
Version      : 1.0
*/
(function ($) {
  "use strict";

  jQuery(document).on("ready", function () {
    /*START MENU JS*/
    $("#main-menu").slicknav({
      label: "",
      duration: 1000,
      easingOpen: "easeOutBounce", //available with jQuery UI
      prependTo: "#mobile_menu",
      closeOnClick: true,
      easingClose: "swing",
      easingOpen: "swing",
      openedSymbol: "&#9660;",
      closedSymbol: "&#9658;",
    });

    if ($(window).scrollTop() > 200) {
      $(".fixed-top").addClass("menu-bg");
    } else {
      $(".fixed-top").removeClass("menu-bg");
    }
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 70) {
        $(".site-navigation, .header-white, .header").addClass("navbar-fixed");
      } else {
        $(".site-navigation, .header-white, .header").removeClass(
          "navbar-fixed"
        );
      }
    });
    /*END MENU JS*/

    /* START COUNTDOWN JS*/
    $(".counter_feature").on(
      "inview",
      function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this)
            .find(".counter-num")
            .each(function () {
              var $this = $(this);
              $({ Counter: 0 }).animate(
                { Counter: $this.text() },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.ceil(this.Counter));
                  },
                }
              );
            });
          $(this).unbind("inview");
        }
      }
    );
    /* END COUNTDOWN JS */

    /*START VIDEO JS*/
    $(".video-play").magnificPopup({
      type: "iframe",
    });
    /*END VIDEO JS*/

    /*START VIDEO JS*/
    $(".video-play-two").magnificPopup({
      type: "iframe",
    });
    /*END VIDEO JS*/

    /* START JQUERY LIGHTBOX*/
    jQuery(".lightbox").venobox({
      numeratio: true,
      infinigall: true,
    });
    /* END JQUERY LIGHTBOX*/

    /*START PORTFOLIO JS*/
    $(".portfolio_item").mixItUp({});
    $(".product_item").mixItUp();
    /*END PORTFOLIO JS*/

    /*START HOME WATER JS*/
    if (typeof $.fn.ripples == "function") {
      try {
        $(".ripple").ripples({
          resolution: 500,
          perturbance: 0.01,
        });
      } catch (e) {
        $(".error").show().text(e);
      }
    }
    /*END HOME WATER JS*/

    /*START PROGRESS BAR*/
    $(".progress-bar > span").each(function () {
      var $this = $(this);
      var width = $(this).data("percent");
      $this.css({
        transition: "width 2s",
      });

      setTimeout(function () {
        $this.appear(function () {
          $this.css("width", width + "%");
        });
      }, 500);
    });
    /*END PROGRESS BAR*/

    /* START COUNTDOWN JS*/
    $(".counter_feature").on(
      "inview",
      function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this)
            .find(".timer")
            .each(function () {
              var $this = $(this);
              $({ Counter: 0 }).animate(
                { Counter: $this.text() },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.ceil(this.Counter));
                  },
                }
              );
            });
          $(this).unbind("inview");
        }
      }
    );
    /* END COUNTDOWN JS */

    /*START TESTIMONIAL JS*/
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [980, 2],
      itemsTablet: [768, 2],
      itemsMobile: [650, 1],
      pagination: true,
      navigation: false,
      slideSpeed: 1000,
      autoPlay: false,
    });

    $("#testimonial-slider-two").owlCarousel({
      items: 1,
      itemsDesktop: [1000, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsMobile: [650, 1],
      pagination: true,
      autoPlay: false,
    });
    /*END TESTIMONIAL JS*/

    /*START PARTNER LOGO*/
    $(".partner").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 5,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
    });
    /*END PARTNER LOGO*/
  });

  /* START PARALLAX JS */
  (function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
    } else {
      $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
      });
    }
  })();
  /* END PARALLAX JS  */

  /*START WOW ANIMATION JS*/
  new WOW().init();
  /*END WOW ANIMATION JS*/
})(jQuery);
