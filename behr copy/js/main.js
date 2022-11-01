$(document).ready(function() {
    let winW = $(window).width()
    let docW = $(document).width()

    console.log(winW)
    console.log(docW)

    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

    $('aside button').on('click',function(){
        console.log('눌렀어')
        // $(window).scrollTop(0)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })


    /* 
        header에
        조건 1 - 스코롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건 2 - 스크롤 값이 0이면 header에 fixed 클래스를 삭제 */


    /*로딩했을때 맨 처음*/   
    let scrolling = $(window).scrollTop()
    console.log(scrolling)
    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
    /*스크롤 할때마다 실행*/
    $(window).scroll(function(){ /*스크롤 할때마다 실행*/
        headerFixed()//함수의 실행
   
    })

    function headerFixed(){
        scrolling = $(window).scrollTop()
        if(scrolling < 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }


    $('header nav > ul').on('mouseenter', function(){
        $('header').addClass('open')
    })
    $('header').on('mouseenter', function(){
        $('header').removeClass('open')
    })
    $('header nav > ul >li:last-child >ul >').on('mouseenter', function(){
        $('header').removeClass('open')
    })


    
    let fixObj = $('.product h2');
    let fixArea = $('.product');
    let fixTop = 120;
    let fixBtm = 105;
    let fixStart;
    let fixEnd;
    let fixscroll = $(window).scrollTop();


    objFixed();

    $(window).scroll(function(){
        fixscroll = $(window).scrollTop();
        objFixed();
    });

    $(window).resize(function(){
       objFixed();
    });



    function objFixed(){
       // console.log(scrolling);
       let fixStart = fixArea.offset().top - fixTop;
       let fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;

       if(fixscroll >= fixStart){
           fixObj.removeClass('fixed');
           fixObj.removeClass('end');
       }else if((fixscroll >= fixStart)&&(fixscroll < fixEnd)){
           fixObj.addClass('fixed');
           fixObj.removeClass('end');
       }else{
           fixObj.removeClass('fixed');
           fixObj.addClass('end');
       }
    }

})



