$(document).ready(function(){
    const swiper = new Swiper('.visual1', {
       
        loop: true, //마지막 팝업 --> 1번 팝업으로 자연스럽게 넘기기 (지우면 마지막 팝업에서 안눌림)
        effect: "fade", //fade 효과로 팝업 넘김(지우면 좌우 슬라이드)
      
        autoplay : {
            delay: 3000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
          el: '.ctrl_paging',
          clickable: true, /* 동그라미일때 동그라미를 클릭하게 해주는 것 */
          type : "fraction" , /* 숫자로 팝업 수 표시 */
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.ctrl_prev',
          prevEl: '.ctrl_prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    $('visual1 .ctrl_stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
    });    
    $('visual1 .ctrl_play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
    });
    
});