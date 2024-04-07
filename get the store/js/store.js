$(window).scroll(function(){
    if($(window).scrollTop() >= 50) {
        $('.nav').css("background","#0a2db8");
        $('.link ul li a').css("color","#fff");
        $('.bar').css("color","#fff");
        $('.img span ').css("color","#fff");
    }else{
        $('.nav').css("background","transparent");
        $('.link ul li a').css("color","#000000");
        $('.bar').css("color","#333");
        $('.img span ').css("color","#333");
    }

});

$(function (){
    'use strict';
    $('.link ul li a').click(function () {
        $(this).addClass('active').siblings('.link ul li a').removeClass('active');
    });
    $('.bar').click(function () {
        $('.menu-bar').animate({
            right:'0'
        },200);
    });
    $('.bar-mobile').click(function () {
        $('.menu-bar').animate({
            right:'-300px'
        },200);
    });
});