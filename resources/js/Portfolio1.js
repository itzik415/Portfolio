
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

    //making the name at the button work
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



var screenHeight = screen.height - 110;

//creating white starts
function amount(i){
    let y = String(Math.floor(Math.random() * screenHeight));
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

//printing to the screen the stars
if(outerWidth < 480){
    var screenHeight = screen.height - 25;
    for(let i = 0; i < 200; i++){
        amount(i);
    } 
}else {
    var screenHeight = screen.height - 110;
    for(let i = 0; i < 380; i++){
        amount(i);
    }
}



//making the stars shining
var shiningStar = function(){
    if(outerWidth < 500){
        var y = Math.floor(Math.random()* 40);
    }else {
        var y = Math.floor(Math.random()* 100);
    }
    document.querySelectorAll('.star-img')[y].style.animation = 'star-img 4.34345s linear infinite';
    document.querySelectorAll('.star-img')[y].style.width = '12px';
}

setInterval(shiningStar,100);

function newNum(){
    var x = Math.floor(Math.random() * -800);
    return x;
}

//Manipulate portfolio button arrow 
document.querySelector('#main_button').addEventListener('mouseover',function(){
    document.querySelector('.ion-arrow-right-c').style.transform = 'rotate(90deg)';
})

document.querySelector('#main_button').addEventListener('mouseout',function(){
    document.querySelector('.ion-arrow-right-c').style.transform = 'rotate(0deg)';
})

//Manipulate submit form button

document.querySelector('#button-submit').addEventListener('click', function (){
    document.querySelector('.send-spaceship').style.animation = 'send-spaceship 5s 1';
})

document.querySelector('#button-submit').addEventListener('mouseout',function(){
    document.querySelector('#button-submit').style.background = '#1E242C';
})

//////////////////////////////////////////////////////////
var gitButton1 = document.querySelector('.github-button1');
var liveButton1 = document.querySelector('.live-coding1');

liveButton1.addEventListener('mouseover',function(){
    gitButton1.style.background = 'white';
    gitButton1.style.color = '#ff4e6c';
    liveButton1.style.background = '#ff4e6c';
    liveButton1.style.color = 'white';
})

liveButton1.addEventListener('mouseout',function(){
    gitButton1.style.background = '#ff4e6c';
    gitButton1.style.color = 'white';
    liveButton1.style.background = 'white';
    liveButton1.style.color = '#ff4e6c';
})
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
var gitButton2 = document.querySelector('.github-button2');
var liveButton2 = document.querySelector('.live-coding2');

liveButton2.addEventListener('mouseover',function(){
    gitButton2.style.background = 'white';
    gitButton2.style.color = '#26AFEB';
    liveButton2.style.background = '#26AFEB';
    liveButton2.style.color = 'white';
})

liveButton2.addEventListener('mouseout',function(){
    gitButton2.style.background = '#26AFEB';
    gitButton2.style.color = 'white';
    liveButton2.style.background = 'white';
    liveButton2.style.color = '#26AFEB';
})
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
var gitButton3 = document.querySelector('.github-button3');
var liveButton3 = document.querySelector('.live-coding3');

liveButton3.addEventListener('mouseover',function(){
    gitButton3.style.background = 'white';
    gitButton3.style.color = '#60be86';
    liveButton3.style.background = '#60be86';
    liveButton3.style.color = 'white';
})

liveButton3.addEventListener('mouseout',function(){
    gitButton3.style.background = '#60be86';
    gitButton3.style.color = 'white';
    liveButton3.style.background = 'white';
    liveButton3.style.color = '#60be86';
})
//////////////////////////////////////////////////////////












//Manipulate contact button arrow 
// document.querySelector('.lower-arrow').addEventListener('click', function(){
//     document.querySelector('.lower-arrow').style.transition = '0.3s';
//     document.querySelector('.lower-arrow').style.background = 'white';
//     document.querySelector('.arrow-box').style.color = '#ff4e6c';
// })

// document.querySelector('.lower-arrow').addEventListener('mouseout',function(){
//     document.querySelector('.lower-arrow').style.background = '#ff4e6c';
//     document.querySelector('.arrow-box').style.color = 'white';
// })

// document.querySelector('.lower-arrow').addEventListener('click',function(){
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// })








//document.querySelector('#main-opening').offsetHeight;
 
// innerHeight: 557 החלק של הבפנים לא כולל הקונסול
// innerWidth: 1019

// outerHeight: 557 החלק של הבפנים כולל הקונסול
// outerWidth: 1019

// document.body.scrollHeight: 4597 אורך הדף הכולל
// screenHeight: 940 קבוע לא משתנה

// pageYOffset: 2172 אורך הדף + הקונסול 

// screenTop: 22 השטח מחוץ לדף שנשאר
// scrollY: 2172 האורך של הדף באותו חלק שאנחנו נמצאים
// screenY: 22 השטח מחוץ לדף שנשאר 


// //fallig star
// function move() {
//     var fallingStar = document.querySelector("#falling-star");
//     fallingStar.style.display = 'block';
//     fallingStar.style.top=""+y+"px";
//     fallingStar.style.right=""+x+"px"; 
//     x = x+1;
//     y = y+1;
//     if(y === 520 || x === 1200){
//         x = newNum();
//         y = newNum();
//     }
// }


// function wholePross(){
//     x = newNum();
//     y = newNum();
// }

// wholePross();
// var inter = setInterval(move,10);
