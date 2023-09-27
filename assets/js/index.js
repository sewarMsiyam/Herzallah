AOS.init();


        
new Swiper("#servers .mySwiper", {
  navigation: {
    nextEl: "#servers .swiper-button-prev",
    prevEl: "#servers .swiper-button-next ",
  },
  pagination: {
    el: "#servers .swiper-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesPerView: "auto",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});