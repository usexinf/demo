var veiwHeight = document.documentElement.clientHeight;

$('article, section').css('height', veiwHeight);

var scrollFn = function() {

    $('.scroll').css({
        display: "block"
    });

   



    var pageNum = 0;
    var sectionLength = $('section').size();


    $('section, .page_up').on('swipeUp', function() {
        pageNum++;
        if (pageNum > sectionLength - 1) {
            pageNum = sectionLength - 1;
        }
        if (pageNum == sectionLength - 1) {
            $('.page_up').hide();
        }
        pageUp(pageNum);
    })

    $('section, .page_up').on('swipeDown', function() {
        $('.page_up').css('display', 'block');
        pageNum--;
        if (pageNum < 0) {
            pageNum = 0;
        }

        pageUp(pageNum);
    })

    function pageUp(oIndex) {
        if (oIndex >= 6) {
            if (oIndex == 6) {
                $('#s6').removeClass('gv-wrap1').addClass('gv-wrap2');
            } else {
                $('#s6').removeClass('gv-wrap2');
            }
            oIndex -= 1;
        } else {
            $('.scroll').find('section').removeClass('gv-wrap1');
        }
        $('.scroll').css('top', -oIndex * veiwHeight);
        $('section').removeClass('gv-wrap1 ');
        $('section').eq(oIndex).addClass('gv-wrap1');
    }


}

window.onload = function () {
    scrollFn();
}