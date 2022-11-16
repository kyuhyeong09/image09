$(document).ready(function(){
    $('header .gnb > ul > li').on('mouseenter',function(){
        $('header').addClass('menu_open')
    })
    $('header').on('mouseleave',function(){
        $('header').removeClass('menu_open')
    })
})//document.ready