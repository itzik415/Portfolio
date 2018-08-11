
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
            <link rel="stylesheet" href="css/style.css">
            <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
            <script src="https://unpkg.com/ionicons@4.2.4/dist/ionicons.js"></script>
        </head>
        <body>
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
                <label for="navi-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>
                <div class="navigation__background">&nbsp;</div>
                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item"><a href="#about-content" class="navigation__link"><span>01</span>About Me</a></li>
                        <li class="navigation__item"><a href="#portfolio-content" class="navigation__link"><span>02</span>Portfolio</a></li>
                        <li class="navigation__item"><a href="#skills-content" class="navigation__link"><span>03</span>Skills</a></li>
                        <li class="navigation__item"><a href="#footer" class="navigation__link"><span>04</span>contact</a></li>
                        <li class="navigation__item"><a href="resources/css/images/Itzik-Shaoulian-html-resume.jpg" target="_blank" class="navigation__link"><span>05</span>Resume</a></li>
                    </ul>
                </nav>
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
                <div class="expertise-values">
                    <div class="skills-div">
                        <img class="skills-image" src="resources/css/images/skills.png">
                    </div> 
                    <div class="expertise-para-me">
                        <div class="expertise">
                            <p class="expertise-heading-para"><i class="fas fa-diagnoses expertise-icon"></i>Ideas</p>
                            <p class="expertise-main-para">
                                I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. 
                                After all, that's where the majority of amazing user experiences start.
                        </div>
                        <hr class="expertise-seperator">
                        <div class="expertise">
                            <p class="expertise-heading-para"><i class="fas fa-gem expertise-icon"></i>Design</p>
                            <p class="expertise-main-para">
                                I sketch and wireframe interfaces focusing on content structure, 
                                intuitive UI patterns and simple interactions. 
                                I'm a minimalist who truly believes that less is more.
                            </p>
                        </div>
                        <hr class="expertise-seperator">
                        <div class="expertise">
                            <p class="expertise-heading-para"><i class="fas fa-code expertise-icon"></i>Code</p>
                            <p class="expertise-main-para">
                                I design in the browser with HTML(5), CSS(3) and a touch of JavaScript. 
                                I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer">
                <div class="social-icons">
                    <a href="https://github.com/itzik415" target="_blank"><i class="fab fa-github-square fa-2x" class="icon-footer"></i></a>
                    <a href="https://www.linkedin.com/in/itzik-shaoulian-b61294106/" target="_blank"><i class="fab fa-linkedin fa-2x" class="icon-footer"></i></a>
                    <a href="mailto:itzikshaoulian@gmail.com"><i class="fa fa-envelope" aria-hidden="true" class="icon-footer"></i></a>
                    <a href="resources/css/images/Itzik-Shaoulian-html-resume.jpg" target="_blank"><i class="fas fa-file-alt"></i></a>
                </div>
                <p class="footer-name">© 2018 <span class="itzik">Itzik Shaoulian</span>. Made in Israel</p>
            </footer>
        </body>
        <script type="text/javascript" src="resources/js/Portfolio1.js"></script>
    </html>





