$(document).ready(function(){
    $('header .gnb > ul > li').on('mouseenter',function(){
        $('header').addClass('menu_open')
    })
    $('header').on('mouseleave',function(){
        $('header').removeClass('menu_open')
    })
    const swiper = new Swiper('.biz .list', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 15, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            641: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 0, 
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });
})//document.ready
