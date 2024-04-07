$(window).scroll(function(){
    if($(window).scrollTop() >= 50) {
        $('.nav').css("background","#0a2db8");
    }else{
        $('.nav').css("background","transparent");
    }
});
$(function (){
    'use strict';
    $('.link ul li a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active');
    });
    $('#bar').click(function () {
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


function myFunction(e){
    if(e.matches){
        document.getElementById("pic1").src="./image-media query/ph2.jpg";
    }else{
        document.getElementById("pic1").src="./img/im1.jpg";
    }
    if(e.matches){
        document.getElementById("pic2").src="./image-media query/ph1.jpg";
    }else{
        document.getElementById("pic2").src="./img/im2.jpg";
    }
    if(e.matches){
        document.getElementById("pic3").src="./image-media query/ph3.jpg";
    }else{
        document.getElementById("pic3").src="./img/im3.jpg";
    }
}
var e = window.matchMedia("(max-width: 1200px)");
myFunction(e);
e.addListener(myFunction);