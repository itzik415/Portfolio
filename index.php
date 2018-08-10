
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Itzik Shaoulian</title>
            <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Righteous|Oswald:200|Playfair+Display:400,700,900|VT323" rel="stylesheet">
            <link rel="stylesheet" href="resources/css/Portfolio1.css">
            <link rel="stylesheet" href="resources/css/queries.css">
            <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
            <script src="https://unpkg.com/ionicons@4.2.4/dist/ionicons.js"></script>
        </head>
        <body>
            <div class="hidden">
                <div class="my-name-header">
                    <img src="resources/css/images/people.png" class="astro-man-header">
                    <h2>Itzik Shaoulian</h2>
                </div>
                <img src="resources/css/images/nav-icon" class="nav-icon-bar">
            </div>
            <div class="hidden2">
                <div class="close-button">
                    <img src="resources/css/images/closing-icon.png" class="closing-icon-bar">
                </div>
                <div class="main-menu-buttons">
                    <h9><a href="#main-opening" class="nav-content0 selected2" id="home2">Home</a></h9>
                    <h9><a href="#about-content" class="nav-content0" id="about2">About</a></h9>
                    <h9><a href="#portfolio-content" class="nav-content0" id="portfolio2">Portfolio</a></h9>
                    <h9><a href="#skills-content" class="nav-content0" id="skills2">Skills</a></h9>
                </div>
                <div class="bottom-hidden">
                    <p class="footer-name-2">© 2018 Itzik Shaoulian. Made in Israel</p>
                    <div class="social-icons-hidden2">
                        <a href="https://github.com/itzik415" target="_blank"><i class="fab fa-github-square fa-2x icon-footer3"></i></a>
                        <a href="https://www.linkedin.com/in/itzik-shaoulian-b61294106/" target="_blank"><i class="fab fa-linkedin fa-2x icon-footer3"></i></a>
                        <a href="mailto:itzikshaoulian@gmail.com"><i class="fa fa-envelope icon-footer3" aria-hidden="true"></i></a>
                        <a href="resources/css/images/Itzik-Shaoulian-html-resume.pdf" target="_blank"><i class="fas fa-file-alt icon-footer3"></i></a>
                    </div>
                </div>
            </div>
            <div id ="main-opening">
                <div id="falling-star"></div>
                <p id="open" >Hello, I'm Itzik Shaoulian.</p>
                <p id="come_in">I'm a full stack web developer.</p>
                <img class="star-img" src="resources/css/images/star3.png">
            </div>
            <div class="about-section" id="about-content">
                <div class="main-line">
                    <h4 class="animated fadeInLeftBig">About Me</h4>
                    <hr class="animated fadeInLeftBig">
                </div>
                <div class="about-para">
                    <img class="about-para-photo" src="resources/css/images/itzik2.jpg">
                    <div class="about-para-me">
                        <div class="about">
                            <p class="about-heading-para">Hi, I'm Itzik!</p>
                            <p class="about-main-para">
                            I'm a software developer who found his true passion in programming. 
                            Previously I worked in business development and served as an IDF military commander, lending to my strong leadership and communication skills.
                            I enjoy using my creative and logical problem-solving 
                            abilities to innovate and solve complex problems when writing code.
                        </div>
                        <hr class="para-seperator">
                        <div class="about">
                            <p class="about-heading-para">Intrests</p>
                            <p class="about-main-para">
                            Playing ths piano, web design, astronomy and cosmology, fitness, thai boxing, 
                            spanish, persian, traveling, reading (some of my favorite books include "The Outliers" and "David and Goliath" by Malcom Gladwell, 
                            "The Future of the Mind" and "Physics of the Impossible" by Michio Kaku, to name a few)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio" id="portfolio-content">
                <div class="main-line">
                    <h4>Portfolio</h4>
                    <hr>
                </div>
                <!-- <div class="choosing-option">
                    <h6 class="all-programming-languages">ALL</h6>
                    <h6 class="all-programming-languages">NODE.JS</h6>
                    <h6 class="all-programming-languages">REACT</h6>
                    <h6 class="all-programming-languages">JAVASCRIPT</h6>
                </div> -->
                <div class="gallery">
                    <div class="first-project-line">
                        <div class="photo">
                            <div class="project-image image-1"></div>
                            <div class="text">
                                <p class="header-title">Digicaching</p>
                                <p class="title-description">Node.js + React</p>
                            </div>
                            <div class="project-button project1">LEARN MORE</div>
                        </div>
                        <div class="hidden-folder">
                            <div class="middle-section">
                                <div class="projects-images number-0-0">
                                    <img class="black-arrow-left" src="resources/css/images/black-arrow-left.png">
                                    <img class="black-arrow-right" src="resources/css/images/black-arrow-right.png">
                                </div>
                                <div class="project-description">
                                    <p class="main-project-title">Digicaching</p>
                                    <p class="main-project-description">Online Game</p>
                                    <hr class="main-project-hr">
                                    <p class="main-project-long-description">Digicaching is a virtual geocaching app that lets users find, 
                                            collect, and share virtual items by exploring their communities and environment. 
                                            Users can combine items to upgrade them into more rare items, 
                                            and fulfill collections by combining advanced component items to build the rarest ones.
                                    </p>
                                </div>
                                <div class="buttons">
                                    <a href="https://www.youtube.com/watch?v=PlbsAkes1VU&feature=youtu.be" target="_blank"><div class="video-button-div">
                                        <ion-icon class="open-icon" name="open"></ion-icon>
                                        <p class="video-button">Watch Video</p>   
                                    </div></a> 
                                    <div class="icon-button">
                                        <ion-icon class="project-close-button" name="close"></ion-icon>
                                    </div> 
                                </div>                                           
                            </div>
                        </div>
                        <div class="photo">
                            <div class="project-image image-2"></div>
                            <div class="text">
                                <p class="header-title">Catalyst</p>
                                <p class="title-description">Node.js + React</p>
                            </div>
                            <div class="project-button project2">LEARN MORE</div>
                        </div>
                        <div class="hidden-folder">
                            <div class="middle-section">
                                <div class="projects-images number-1-0">
                                    <img class="black-arrow-left" src="resources/css/images/black-arrow-left.png">
                                    <img class="black-arrow-right" src="resources/css/images/black-arrow-right.png">
                                </div>
                                <div class="project-description">
                                    <p class="main-project-title">Catalyst</p>
                                    <p class="main-project-description">Online Motivational App</p>
                                    <hr class="main-project-hr">
                                    <p class="main-project-long-description">Motivational app for people that are lacking that extra push. 
                                        Group of close friends post their goals that they want to commit to. 
                                        Your friends vote for a ridiculous punishment for you if you don’t follow through. 
                                        You have to ‘check-in’ to prove that you actually doing the work, else get punished!
                                    </p>
                                </div>
                                <div class="buttons">
                                    <a href="https://www.youtube.com/watch?v=hNMJl7z7fHQ&t=0s" target="_blank"><div class="video-button-div">
                                        <ion-icon class="open-icon" name="open"></ion-icon>
                                        <p class="video-button">Watch Video</p>   
                                    </div></a> 
                                    <div class="icon-button">
                                        <ion-icon class="project-close-button" name="close"></ion-icon>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="second-project-line">
                        <div class="photo">
                            <div class="project-image image-3"></div>
                            <div class="text">
                                <p class="header-title">Digital-Timer</p>
                                <p class="title-description">Pure JavaScript</p>
                            </div>
                            <div class="project-button project3">LEARN MORE</div>
                        </div>
                        <div class="hidden-folder">
                            <div class="middle-section">
                                <div class="projects-images number-2-0">
                                    <img class="black-arrow-left" src="resources/css/images/black-arrow-left.png">
                                    <img class="black-arrow-right" src="resources/css/images/black-arrow-right.png">
                                </div>
                                <div class="project-description">
                                    <p class="main-project-title">Digital-Timer</p>
                                    <p class="main-project-description">Timer</p>
                                    <hr class="main-project-hr">
                                    <p class="main-project-long-description">The first JavaScript project that I completed entirely by myself: JavaScript Timer, built with pure JavaScript. 
                                        This project marks the beginning of my journey of becoming a full-stack web developer. 
                                        This project made me realize my weaknesses and gave me confidence in my strengths. 
                                        I had a really hard time making this timer work properly, and that's what makes this project so meaningful for me.
                                    </p>       
                                </div>
                                <div class="buttons">
                                    <a href="https://www.youtube.com/watch?v=n0GMFIba7j0&feature=youtu.be" target="_blank"><div class="video-button-div">
                                        <ion-icon class="open-icon" name="open"></ion-icon>
                                        <p class="video-button">Watch Video</p>   
                                    </div></a> 
                                    <div class="icon-button">
                                        <ion-icon class="project-close-button" name="close"></ion-icon>
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="skills" id="skills-content">
                <div class="main-line">
                    <h4>Skills</h4>
                    <hr>
                </div>
                <div class="para2">
                    <img class="skills-image" src="resources/css/images/skills.png">
                </div>  
            </div>
            <footer>
                <div class="social-icons">
                    <a href="https://github.com/itzik415" target="_blank"><i class="fab fa-github-square fa-2x" class="icon-footer"></i></a>
                    <a href="https://www.linkedin.com/in/itzik-shaoulian-b61294106/" target="_blank"><i class="fab fa-linkedin fa-2x" class="icon-footer"></i></a>
                    <a href="mailto:itzikshaoulian@gmail.com"><i class="fa fa-envelope" aria-hidden="true" class="icon-footer"></i></a>
                    <a href="resources/css/images/Itzik-Shaoulian-html-resume.pdf" target="_blank"><i class="fas fa-file-alt"></i></a>
                </div>
                <p class="footer-name">© 2018 <span class="itzik">Itzik Shaoulian</span>. Made in Israel</p>
            </footer>
        </body>
        <script type="text/javascript" src="resources/js/Portfolio1.js"></script>
    </html>





