$(document).ready(function(){
    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
    $('.visual .popup .btn_stop').on('click', function(){
        let popStatus = $(this).hasClass('play');
        if(popStatus == true){
            swiper.autoplay.start();
            $(this).removeClass('play');
            $(this).text('일시정지');
        }else{
            swiper.autoplay.stop();
            $(this).addClass('play');
            $(this).text('재생');
        }
    });


    let scrolling;
    fabScroll();
    $(window).scroll(function(){
       fabScroll();
    });

    function fabScroll(){
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        moveTop = scrolling*0.15;
        $('.fabric .bg img').css('transform','translate(0, -'+moveTop+'px)');
    }
});