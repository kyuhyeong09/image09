$(document).ready(function(){//모든 html요소가 로딩된 이후에 jquery를 실행



    
    let winH = $(window).height();

    $('.visual').height(winH);
    
    console.log('window의 높이' + winH);


    $(window).resize(function(){    
        winH = $(window).height();
        $('.visual').height(winH);
        console.log('window의 높이' + winH);
    });
});