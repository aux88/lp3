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
        // 768px以上の時
        768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
    },
});