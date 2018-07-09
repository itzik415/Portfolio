
$(document).ready(function() {
    var scrollLink = $('.option-name');
    scrollLink.click(function(e){ //e refers that there is an event
        e.preventDefault();//preventing default action=hard jump
    	// calculating position of section
        let linkRef = $(this).find('a').attr('href');
        //the following will account for header height
        let position = $(linkRef).offset().top;
    	$('html, body').animate({
    		scrollTop : position
    		}, 500)
    	//animate is looking for css property
    	// scrollTop measures how far from top this is 	
    })

    //making the Porfolio button work
    $('#main_button').click(function(){
    	$('html, body').animate({
    		scrollTop : $('.portfolio').offset().top
    	}, 500) 	
    })

    //making my name at the bottom scroll to the top of the page
    $('.itzik').click(function(){
    	$('html, body').animate({
    		scrollTop : $('#main-opening').offset().top
    	}, 500) 	
    })

    $('.nav-icon-bar').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('.closing-icon-bar').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('#home2').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('#about2').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('#portfolio2').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('#skills2').click(function() {
        $('.hidden2').slideToggle("slow")
    });

    $('#contact2').click(function() {
        $('.hidden2').slideToggle("slow")
    });
    
    // Change highlighted nav item on scroll
    $(window).scroll(function() {
        var navHeight = $('#nav').height(),
            documentHeight = $(document).height(),
            windowHeight = $(window).height(),
            scroll = $(window).scrollTop(),
            about = $('#about-content').offset().top,
            portfolio = $('#portfolio-content').offset().top;
            skills = $('#skills-content').offset().top;

        if (scroll >= about - navHeight) {
            $('#nav a').removeClass('selected');
            $('#about1').addClass('selected');
        }
        if (scroll >= portfolio - navHeight) {
            $('#nav a').removeClass('selected');
            $('#portfolio1').addClass('selected');
        }
        if (scroll >= skills - navHeight) {
            $('#nav a').removeClass('selected');
            $('#skills1').addClass('selected');
        }
        // If at the top of the page, remove all selected classes
        if (scroll === 0) {
            $('#nav a').removeClass('selected');
            $('#home1').addClass('selected');
        }
        // If at bottom of page, add selected class on Contact
        if (scroll + windowHeight === documentHeight) {
            $('#nav a').removeClass('selected');
            $('#contact1').addClass('selected');
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
    img.src = "resources/css/images/star3.png";
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
    for(let i = 0; i < 250; i++){
        amount(i);
    } 
}else if(outerWidth < 500){
    for(let i = 0; i < 100; i++){
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

//Manipulate portfolio button arrow 
document.querySelector('#main_button').addEventListener('mouseover',function(){
    document.querySelector('.ion-arrow-right-c').style.transform = 'rotate(90deg)';
    document.querySelector('.ion-arrow-right-c').style.transition = '0.4s';
})

document.querySelector('#main_button').addEventListener('mouseout',function(){
    document.querySelector('.ion-arrow-right-c').style.transform = 'rotate(0deg)';
})

//Manipulate submit form button
// document.querySelector('#button-submit').addEventListener('click', function (){
//     document.querySelector('.send-spaceship').style.animation = 'send-spaceship 5s 1';
// })

// document.querySelector('#button-submit').addEventListener('mouseout',function(){
//     document.querySelector('#button-submit').style.background = '#1E242C';
// })


//Manipulate projects images
var projectImage = document.querySelectorAll('.photo');

for(let i = 0; i < projectImage.length; i++) {
    projectImage[i].addEventListener('mouseover',function(){
        document.querySelectorAll('.project-image')[i].style.opacity = '0';
        document.querySelectorAll('.project-image')[i].style.transition = '0.4s';
        document.querySelectorAll('.header-title')[i].style.opacity = '1';
        document.querySelectorAll('.header-title')[i].style.transition = '0.4s';
        document.querySelectorAll('.title-description')[i].style.opacity = '1';
        document.querySelectorAll('.title-description')[i].style.transition = '0.4s';
        document.querySelectorAll('.project-button')[i].style.opacity = '1';
        document.querySelectorAll('.project-button')[i].style.transition = '0.4s';
        document.querySelectorAll('.project-button')[i].style.bottom = '45px';
        document.querySelectorAll('.text')[i].style.top = '50px';
        document.querySelectorAll('.text')[i].style.transition = '0.4s';
    })
}

for(let i = 0; i < projectImage.length; i++) {
    projectImage[i].addEventListener('mouseout',function(){
        document.querySelectorAll('.project-image')[i].style.opacity = '1';
        document.querySelectorAll('.header-title')[i].style.opacity = '0';
        document.querySelectorAll('.title-description')[i].style.opacity = '0';
        document.querySelectorAll('.project-button')[i].style.opacity = '0';
        document.querySelectorAll('.project-button')[i].style.bottom = '0px';
        document.querySelectorAll('.project-button')[i].style.transition = '0.4s';
        document.querySelectorAll('.text')[i].style.top = '0px';
        document.querySelectorAll('.text')[i].style.transition = '0.4s';
    })
}


//Manipulate project button
var totalHeight = document.body.scrollHeight;
var hiddenFolder = document.querySelectorAll('.hidden-folder');

for(let i = 0; i < document.querySelectorAll('.project-button').length; i++){
    document.querySelectorAll('.project-button')[i].addEventListener('click', function (){
        hiddenFolder[i].style.display = 'block';
        hiddenFolder[i].style.height = totalHeight + 'px';
        hiddenFolder[i].style.position = 'fixed';
        hiddenFolder[i].style.top = '0';
        hiddenFolder[i].style.left = '0';
    })
}

for(let i = 0; i < document.querySelectorAll('.project-close-button').length; i++){
    document.querySelectorAll('.project-close-button')[i].addEventListener('click', function (){
        hiddenFolder[i].style.display = 'none';
    })
}

//Manipulate photos arrow buttons
for(let i = 0; i < document.querySelectorAll('.black-arrow-right').length; i++){
    let y = 0;
    document.querySelectorAll(".black-arrow-right")[i].addEventListener('click', function(){ 
        if(y < 4){
            document.querySelectorAll(".projects-images")[i].classList.remove(`number-${i}-${y}`);
            document.querySelectorAll(".projects-images")[i].classList.add(`number-${i}-${y+1}`);
            y++;
        }else{
            document.querySelectorAll(".projects-images")[i].classList.remove(`number-${i}-4`);
            document.querySelectorAll(".projects-images")[i].classList.add(`number-${i}-0`);
            y = 0;
        }    
    })

    document.querySelectorAll(".black-arrow-left")[i].addEventListener('click', function(){ 
        if(y > 0){
            document.querySelectorAll(".projects-images")[i].classList.remove(`number-${i}-${y}`);
            document.querySelectorAll(".projects-images")[i].classList.add(`number-${i}-${y-1}`);
            y--;
        }else{
            document.querySelectorAll(".projects-images")[i].classList.remove(`number-${i}-0`);
            document.querySelectorAll(".projects-images")[i].classList.add(`number-${i}-4`);
            y = 4;
        }    
    })
}


//document.querySelector('#main-opening').offsetHeight;

// innerHeight: 557 החלק של הבפנים לא כולל הקונסול
// innerWidth: 1019

// outerHeight: 557 החלק של הבפנים כולל הקונסול
// outerWidth: 1019

// document.body.scrollHeight: 4597 אורך הדף הכולל
// screen.height: 940 קבוע לא משתנה

// pageYOffset: 2172 אורך הדף + הקונסול 

// screenTop: 22 השטח מחוץ לדף שנשאר
// scrollY: 2172 האורך של הדף באותו חלק שאנחנו נמצאים
// screenY: 22 השטח מחוץ לדף שנשאר 

