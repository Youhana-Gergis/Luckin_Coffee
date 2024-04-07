
var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3 ){
        counter = 1;
    }
},5000)






function MyFunction(x){
    if(x.matches){
        document.getElementById("p4").src="./img/beans_mobile.jpg";
    }else{
        document.getElementById("p4").src="./img/9b6c22a86c6f83035098bbc2256fa35d.jpg";
    }
    if(x.matches){
        document.getElementById("p5").src="./img/cafe_moblie.jpg";
    }else{
        document.getElementById("p5").src="./img/9d32ac9f60f5154408d3c3670830e07e.jpg";
    }
    if(x.matches){
        document.getElementById("p6").src="./img/girl_mobile.jpg";
    }else{
        document.getElementById("p6").src="./img/4d13a1c36b008395b6b7eb75b8b2fc49.jpg";
    }
}

var x = window.matchMedia("(max-width:868px)");
MyFunction(x);
x.addListener(MyFunction);


/*  >------------->    Start  jquery   <-------------<  */



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

/*  >------------->  jquery   <-------------<  */


