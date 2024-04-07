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

function myFunction(x) {
    if (x.matches) {
        document.getElementById("im3").src="./image2/im3.jpg";
    }else{
        document.getElementById("im3").src="./img/a6c291ab28b105ea4172fedcf93806cc.jpg";
    }
    if(x.matches){
        document.getElementById("im4").src="./image2/im4.jpg";
    }else{
        document.getElementById("im4").src="./img/7e631bf6eea58822d3bd6b8dcf9f81ae.jpg";
    }
    if(x.matches){
        document.getElementById("im2").src="./image2/im2.jpg";
    }else{
        document.getElementById("im2").src="./img/4c3f0a5b29c47a60547abd39952b560d.jpg";
    }
    if(x.matches){
        document.getElementById("im1").src="./image2/im1.jpg";
    }else{
        document.getElementById("im1").src="./img/f2fd89ab586ab33ecf459d4f49c55e1b.jpg";
    }
    if(x.matches){
        document.getElementById("people-drink-coffee").src="./image2/5a63826eb776e7d73613ad5423a40434.jpg";
    }else{
        document.getElementById("people-drink-coffee").src="./img/d31d205879abf3443e3ea856f8f86aa7.jpg";
    }
  }
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) 
  x.addListener(myFunction)
  