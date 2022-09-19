$(document).ready(function(){
    /* html요소가 모두 다 로딩된 이후에 jquery 실행
       jquery에서 html요소를 호출해서 이벤트를 주기 때문*/



    let winW 
    let pcMobile;
    deviceChk(); // deviceChk라는 이름을 갖는 함수 호출

    //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        deviceChk();
    });
    

    function deviceChk(){
        winW = $(window).width();


        if(winW > 640){
            pcMobile = 'pc';
            console.log(pcMobile);
        }else{
            pcMobile = 'mobile';
            console.log(pcMobile);
        }
    }

    
    $('.header .gnb >ul > li').on('mouseenter focusin', function(){
        if(pcMobile == 'pc'){    
            $('.header').addClass('menu_open');
        }    //if문
    });//mouseenter
    

    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open');
    });
    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open');
    });

   

    $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_mobile');
    });
    $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_mobile');
    });


    $('.header .gnb > ul > li').on('click',function(e){
       if(pcMobile == 'mobile'){
            e.preventDefault();
            $(this).toggleClass('sub_open');
       }
       
       
        /* 해당 요소를 클릭했을때 기본적으로 발생하는 이벤트를 취소 - href로 페이지가 이동하는걸 취소 시킴*/
    });
});
