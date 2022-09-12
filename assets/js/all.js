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
  });
}); // 如果要使用瀑布流 + according，開合會取不到高度，introduce-detal.html這頁先不用瀑布流
// 同學:Will Wu 解法，先做紀錄，後續再理解
// https://letcla0624.github.io/hexLayoutWeek8/art-intro.html
// https://github.com/letcla0624/hexLayoutWeek8/blob/main/app/assets/js/all.js
// const accordionButtons = document.querySelectorAll(".grid-masonry .accordion");
// accordionButtons.forEach(function (e) {
//   ["hidden.bs.collapse", "shown.bs.collapse"].forEach(function (item) {
//     e.addEventListener(item, () => {
//       masonry();
//     });
//   });
// });

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
