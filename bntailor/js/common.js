$(document).ready(function(){
    let scrolling = $(window).scrollTop();
    console.log(scrolling);

    $(window).scroll(function(){
        scrollChk();
    });

    function scrollChk(){
        scrolling = $(window).scrollTop();
        console.log(scrolling, '스크롤될때마다');

        if(scrolling > 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    }

    $('.header .gnb .gnb_open').on('click', function(){
        // console.log('누름');
        gnbStu = $('.header .gnb').hasClass('mobile_open');
        if(gnbStu == true){
            // console.log(gnbStu);        
            $('.header .gnb').removeClass('mobile_open');
        }else{
            // console.log('false 닫힌상태')
            $('.header .gnb').addClass('mobile_open');
        }
            
    });




});