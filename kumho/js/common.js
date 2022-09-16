$(document).ready(function(){
    $(document).ready(function(){ 

        let winW = $(window).width();
        let pcMobile;

        if(winW > 640){
            pcMobile = 'pc';
            console.log(pcMobile);
        }else{
            pcMobile = 'mobile';
            console.log(pcMobile);
        }
        // 모든 html요소가 로딩된 이후에 jquery를 실행
    
        /*
            visual영역의 높이를 브라우저의 높이와 동일하게 설정
            window.height
            > 브라우저가 리사이즈 될때마다 높이를 다시 설정
            > visual문구는 높이의 위아래 가운데 쯤에 배치
        */
        let winH = $(window).height();
        $('.visual .cnt_h').height(winH); // visual의 높이를 window의 높이로 설정
        console.log('window의 높이' + winH);
    
        $(window).resize(function(){ //브라우저가 리사이즈 될때마다 실행
            winH = $(window).height();
            $('.visual .cnt_h').height(winH); // visual의 높이를 window의 높이로 설정
            console.log('window의 높이' + winH);
        });
    
        $('header .lang .open').on('click',function(){
            $('header .lang').addClass('lang_open');
        });
        $('header .lang .close').on('click',function(){
            $('header .lang').removeClass('lang_open');
        });
    
    
        $('.header .gnb >ul >li >a').on('mouseenter focusin', function(){
            $('header').addClass('menu_open');
        });
        $('.header').on('mouseleave focusout', function(){
            $('header').removeClass('menu_open');
        });
        $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
            $('header').removeClass('menu_open');
        });
    
    
    
        $('.header .gnb .open').on('click', function(){
            $('.header').addClass('menu_mobile');
        });
        $('.header .gnb .close').on('click', function(){
            $('.header').removeClass('menu_mobile');
        });
    
        $('.header .gnb > ul > li').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('sub_open');
        });
    
    });//document.ready 종료
});