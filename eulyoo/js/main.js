/*
    언제 : 스크롤을 내렸을때
    누구를 : header
    어떻게 : fixed 클래스를 추가 : addClass() -
    클래스를 추가하는 명령
*/

 
let scrolling = $(window).scrollTop()

$(window).scroll(function(){
    scrolling = $(window).scrollTop()
    $('header').addClass('fixed')
    console.log(scrolling)
})
