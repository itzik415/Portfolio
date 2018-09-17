
$(document).ready(function() {

    //Nav icon react when there is a click on one of its elements
    $(".navigation__item").click(function(){
        $('#navi-toggle').attr('checked', false);
    });

    //making my name at the bottom scroll to the top of the page
    $('.itzik').click(function(){
    	$('html, body').animate({
    		scrollTop : $('#main-opening').offset().top
    	}, 500) 	
    })

    // Make the animations work on the right time
    $(window).scroll(function() {
        var navHeight = $('.navigation__button').offset().top,
            about = $('.about-section').offset().top,
            portfolio = $('.portfolio').offset().top,
            skills = $('.skills').offset().top;

        if (navHeight >= about) {
            $('.about-section').addClass('change-opacity');
            $('#about-h4').addClass('animated-left-h4');
            $('#about-hr').addClass('animated-left-hr');
            $('.about-para-photo').addClass('animated-left');
            $('.about-para-me').addClass('animated-right');
            $('.para-seperator').addClass('animated-right');
        }

        if (navHeight >= portfolio) {
            $('.portfolio').addClass('change-opacity');
            $('#portfolio-h4').addClass('animated-left-h4');
            $('#portfolio-hr').addClass('animated-left-hr');
            $('.gallery').addClass('animated-fadedIn');
        }

        if (navHeight >= skills) {
            $('.skills').addClass('change-opacity');
            $('#skills-h4').addClass('animated-left-h4');
            $('#skills-hr').addClass('animated-left-hr');
            $('.expertise-para-me').addClass('animated-left');
            $('.skills-image').addClass('animated-fadedIn');
        }
    });
    
});


//creating white starts
var amount = function(i){
    let size = 120;
    if(window.innerHeight <= 1040){ 
        size = 20;
    }
    let y = String(Math.floor(Math.random() * (window.innerHeight-size)));
    let x = String(Math.floor(Math.random() * screen.width));
    var star = document.getElementsByClassName('star-img')[i];
    var img = document.createElement("img");
    img.src = "../resources/css/images/star3.png";
    img.setAttribute('class', "star-img");
    star.style.top = y + "px";
    star.style.right = x + "px";
    var src = document.getElementById("main-opening");
    src.appendChild(img);
}

//printing the stars to the screen
if(outerWidth < 1050 && outerWidth >= 800 ){
    for(let i = 0; i < 300; i++){
        amount(i);
    } 
}else if(outerWidth < 800 && outerWidth >= 500){
    for(let i = 0; i < 300; i++){
        amount(i);
    } 
}else if(outerWidth < 500){
    for(let i = 0; i < 200; i++){
        amount(i);
    } 
}else {
    for(let i = 0; i < 380; i++){
        amount(i);
    }
}

//making the stars shining
var shiningStar = function(){
    var totalStars = document.querySelectorAll('.star-img');
    if(outerWidth < 800 && outerWidth >= 500){
        var y = Math.floor(Math.random()* 65);
        totalStars[y].style.animation = 'star-img 4.34345s linear infinite';
        totalStars[y].style.width = '9px';
    }if(outerWidth < 500){
        var y = Math.floor(Math.random()* 40);
        totalStars[y].style.animation = 'star-img 4.34345s linear infinite';
        totalStars[y].style.width = '7px';
    }else {
        var y = Math.floor(Math.random()* 100);
        totalStars[y].style.animation = 'star-img 4.34345s linear infinite';
        totalStars[y].style.width = '12px';
    }
}

setInterval(shiningStar,100);

function newNum(){
    var x = Math.floor(Math.random() * -800);
    return x;
}


//Manipulate projects images
for(let i = 0; i < document.querySelectorAll('.project-image').length; i++) {
    document.querySelectorAll('.project-image')[i].addEventListener('click',function(){
        document.querySelectorAll('.hidden-folder')[i].style.display = 'flex';
    })
    
    let y = 1;

    document.querySelectorAll(".black-arrow-right")[i].addEventListener('click', function(){ 
        if(y < 5){
            document.querySelectorAll(".projects-images")[i].src = `resources/css/images/photo-${i}-${y+1}.png`;
            y++;
        }else {
            document.querySelectorAll(".projects-images")[i].src = `resources/css/images/photo-${i}-1.png`;
            y = 1;
        }
    });

    document.querySelectorAll(".black-arrow-left")[i].addEventListener('click', function(){ 
         if(y > 1){
            document.querySelectorAll(".projects-images")[i].src = `resources/css/images/photo-${i}-${y-1}.png`;
            y--;
        }else {
            document.querySelectorAll(".projects-images")[i].src = `resources/css/images/photo-${i}-5.png`;
            y = 5;
        }
    });
}

//Manipulate photos closing button
for(let i = 0; i < document.querySelectorAll('.project-close-button').length; i++){
    document.querySelectorAll('.project-close-button')[i].addEventListener('click', function (){
        document.querySelectorAll('.hidden-folder')[i].style.display = 'none';
    })
}


//Manipulate submit form button
document.querySelector('.submit-button').addEventListener('click', function (){
    document.querySelector('.send-spaceship').style.animation = 'send-spaceship 5s 1';
})