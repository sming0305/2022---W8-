
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

});

var swiper = new Swiper('.swiper-container', {
  speed: 1600,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    },
  grabCursor: true,

  breakpoints: { 

    992: {
      slidesPerView: 1,
    },

    1200: { 
      slidesPerView: 3,
      spaceBetween: 24
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


$('.masonry').imagesLoaded().progress( function() {
  $('.masonry').masonry(); 
});









//   <script>        
//   var mySwiper = new Swiper ('.swiper', {
//     direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项
    
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
    
//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    
//     // 如果需要滚动条
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   })        
//   </script> 