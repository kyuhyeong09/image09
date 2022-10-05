$(document).ready(function(){
    /* lnb메뉴를 클릭하면 하위 메뉴가 나타났다가 사라짐 */

    // let lnbSt = $('.lnb .menu .depth').hasClass('open');
    // console.log(lnbSt);

    let lnbSt;
    $('.lnb .menu .depth .btn').on('click', function(){
        lnbSt = $(this).parents('.depth').hasClass('open');
        if(lnbSt == true){
            $(this).parents('.depth').removeClass('open');
            $(this).attr('title', '메뉴열기');
            $(this).next().slideUp(300);
        }else{
            $(this).parents('.depth').addClass('open');
            $(this).attr('title', '메뉴닫기');
            $(this).next().slideDown(300);
        }
    });
});


