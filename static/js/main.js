var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true
});


swiper.on('slideChangeStart', function () {
    console.log(swiper.activeIndex);
});

$('.action_1 .button').on('touch', function () {
	swiper._slideNext();
})