"use strict";

$(document).ready(function () {
  $("#offcanvasButton").click(function (e) {
    $(".offcanvas-backdrop").toggleClass("show");
    $(".mini__menu").toggleClass("d-none");
    $(".close__botton").toggleClass("d-none");
  });
  $(".wallet_botton").click(function (e) {
    $(this).toggleClass("btn-active");
    $(this).toggleClass("outline-secondary-1");
    $(this).toggleClass("border-primary");
    $(this).toggleClass("border-secondary");
    $(this).find(".check-icon").toggleClass("show");
    $(this).parent().siblings("li").find(".wallet_botton").removeClass("btn-active");
    $(this).parent().siblings("li").find(".wallet_botton").find(".fade").removeClass("show");
    $(this).parent().siblings("li").find(".wallet_botton").removeClass("border-secondary");
    $(this).parent().siblings("li").find(".wallet_botton").removeClass("outline-secondary-1");
    $(this).parent().siblings("li").find(".wallet_botton").addClass("border-primary");
  });
  $(".search__button").click(function (e) {
    $(this).removeClass("me-6");
    $("#offcanvasButton").addClass("d-none");
    $(".search_grid").removeClass("d-none");
    $(".search_grid").addClass("py-4");
    $(".search_grid").addClass("py--sm--43");
    $(".logo").addClass("d-none");
    $(".mobile__control").addClass("w-100");
  });
  $(".search__closeButton").click(function (e) {
    $(".search__button").addClass("me-6");
    $("#offcanvasButton").removeClass("d-none");
    $(".search_grid").addClass("d-none");
    $(".logo").removeClass("d-none");
    $(".mobile__control").removeClass("w-100");
  }); // 發現如果要使用瀑布流 + according，開合會取不到高度。
  // 查閱同學解法後，後續再理解，先自行用替代作法切出大概的排版位置。

  $("#introduce-detal__heading__2").click(function (e) {
    e.preventDefault();
    $("#introduce-detal__heading__3").parent().toggleClass("mt-lg-z32");
  }); // const accordionButtons = document.querySelectorAll(".grid-masonry .accordion");
  // accordionButtons.forEach(function (e) {
  //   ["hidden.bs.collapse", "shown.bs.collapse"].forEach(function (item) {
  //     e.addEventListener(item, () => {
  //       masonry();
  //     });
  //   });
  // });

  $("#walletButton__pc").click(function (e) {
    e.preventDefault();
    $(".workseries__menu__modal-backdrop").toggleClass("show");
    $(".workseries__menu__modal-backdrop").toggleClass("active");
  });
  $("#linkWallet").click(function (e) {
    e.preventDefault();
    $(".workseries__menu__modal-backdrop").removeClass("show");
    $(".workseries__menu__modal-backdrop").removeClass("active");
  });
  $(".introduce-detal-accordion-button.collapsed").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("mb-6");
  });
});
var swiper = new Swiper('.swiper-container-1', {
  speed: 1600,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  grabCursor: true,
  breakpoints: {
    992: {
      slidesPerView: 1
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiper = new Swiper('.swiper-container-2', {
  slidesPerView: 2,
  speed: 1600,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
$('.masonry').imagesLoaded().progress(function () {
  $('.masonry').masonry();
});
//# sourceMappingURL=all.js.map
