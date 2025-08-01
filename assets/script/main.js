const mySwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1.24,
  spaceBetween: 15,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3, // 768px以上の場合の表示数
    },
  },
  autoplay: { //自動再生の設定
    delay: 3000,
    disableOnInteraction: false,
  },
});