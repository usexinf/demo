var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true
});


swiper.on('slideChangeStart', function () {
    var index = swiper.activeIndex;
    $(".swiper-slide").eq(index).find('.animation-wrap').addClass("begin")
});

$('.action_1 .button').on('tap', function () {
	swiper._slideNext();
})