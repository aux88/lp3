const mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.24,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 3, // 768px以上の場合の表示数
            slidesPerGroup: 2,
        },
    },
});