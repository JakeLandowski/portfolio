<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Portfolio</title>
	<!--
CREDIT TO : Fluid Gallery Template
http://www.templatemo.com/tm-500-fluid-gallery
-->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/hero-slider.css">
	<link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="css/templatemo.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
<!-- 	<link rel="stylesheet" href="css/custom_table_styles.css"> -->
	<link rel="stylesheet" href="css/portfolio.css">

	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
          <![endif]-->


</head>

<body>

	<!-- Content -->
	<div class="cd-hero">

		<!-- Navigation -->
		<div class="cd-slider-nav">
			<nav class="navbar navbar-expand-lg">
				<div class="tm-navbar-bg">

					<a class="navbar-brand text-uppercase" href="#">
						<div class="portrait"></div>Jacob Landowski</a>

					<button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                            &#9776;
                        </button>
					<div class="collapse navbar-collapse text-xs-center text-uppercase tm-navbar" id="tmNavbar">
						<ul class="nav navbar-nav">
							<li class="nav-item active selected">
								<a id="portfolio" class="nav-link" href="#0" data-no="1">Portfolio <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a id="about" class="nav-link" href="#0" data-no="2">About</a>
							</li>
							<li class="nav-item">
								<a id="resume" class="nav-link" href="#0" data-no="3">Resume</a>
							</li>
							<li class="nav-item">
								<a id="contact" class="nav-link" href="#0" data-no="4">Contact</a>
							</li>
							<li class="nav-item">
								<a id="admin" class="nav-link" href="#0" data-no="5">Admin</a>
							</li>
						</ul>
					</div>
				</div>

			</nav>
		</div>

		<ul class="cd-hero-slider">

			<!-- Portfolio -->
			<li class="selected">
				<div class="cd-full-width">
					<div class="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery">
						<div class="tm-img-gallery-container">
							<div class="tm-img-gallery gallery-one">
								<!-- Gallery One pop up connected with JS code below -->
								<div id="forum" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/forum.png" alt="Sentence Generator Forum" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Sentence Generator Forum</strong></span></h2>
											<p class="tm-figure-description">Machine Learning-esque Forum where accounts attempt to mimic their users</p>
											<!--                                                 <a href="img/igrad.webm">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="igrad" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/wip.svg" alt="iGrad Application" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>iGrad Application</strong></span></h2>
											<p class="tm-figure-description">User-friendly web application process for Kent School District</p>
											<!--                                                 <a href="img/igrad.webm">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="web_crawler" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/web_crawler_thumb.png" alt="Java Web Crawler" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Java Web Crawler</strong></span></h2>
											<p class="tm-figure-description">Web Page Parser and keyword finder made in Java</p>
											<!--                                                 <a href="img/tm-img-02.jpg">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="cs_advising" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/cs_advising_thumb.jpg" alt="CompSci Advising App" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>CompSci Advising App</strong></span></h2>
											<p class="tm-figure-description">Javascript One Page App for describing transfer degree class requirements</p>
											<!--                                                 <a href="img/tm-img-02.jpg">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="tetris" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/tetris_thumb.png" alt="Tetris Demo" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Tetris Demo</strong></span></h2>
											<p class="tm-figure-description">Rough Tetris Demo made in Java with ACM graphics library</p>
											<!--                                                 <a href="img/tm-img-03.jpg">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="asteroids" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/asteroids_thumb.png" alt="Asteroids Game" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Asteroids Game</strong></span></h2>
											<p class="tm-figure-description">Asteroids arcade game made in Java with ACM graphics library</p>
											<!--                                                 <a href="img/tm-img-04.jpg">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="fireworks" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/fireworks_thumb.png" alt="Fractal Fireworks" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Fractal Fireworks</strong></span></h2>
											<p class="tm-figure-description">Recursive/Fractal fireworks made in Java with ACM graphics library</p>
											<!--                                                 <a href="img/tm-img-05.jpg">View more</a> -->
										</figcaption>
									</figure>
								</div>
								<div id="stars" class="grid-item">
									<figure class="effect-sadie">
										<img src="img/stars_thumb.png" alt="Star Screensaver" class="img-fluid tm-img">
										<figcaption>
											<h2 class="tm-figure-title"><span><strong>Star Screensaver</strong></span></h2>
											<p class="tm-figure-description">Backwards star screensaver made in Java with ACM graphics library</p>
											<a href="img/tm-img-06.jpg">View more</a>
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
			
				<!-- About -->
			<li>
				<div class="cd-full-width">
					<div class="container-fluid js-tm-page-content tm-page-width tm-pad-b" data-page-no="4">

						<div class="tm-about-page">

							<div class="row tm-white-box-margin-b">
								<div class="col-12">
									<div class="tm-flex">
										<div class="d-flex flex-wrap justify-content-center tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
											<h2 class="tm-text-title">Linkedin Profile</h2>
											<script src="//platform.linkedin.com/in.js"></script>
											<script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/jacoblandowski" data-format="inline" data-related="false"></script>
											<a id="linkedin_backup" href="//www.linkedin.com/in/jacoblandowski">Linkedin - Jacob Landowski</a>
										</div>
										<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
											<h2 class="tm-text-title">Traits</h2>
											<div class="container-fluid">
												<div class="row text-center">
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Java</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Javascript</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">PHP</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">SQL</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">CSS</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">JQuery</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Bootstrap</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Linux</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Agile</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">AJAX</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">Fast Learner</p></div>
													<div class="col-4 col-sm-3 col-md-6 col-lg-4 mb-3"><p class="bg-light tm-text">High Caffeine Tolerance</p></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="row tm-white-box-margin-b">
								<div class="col-12">
									<div class="tm-flex">
										<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-textbox-padding">
											<h2 class="tm-text-title">Who I Am</h2>
											<p class="tm-text">
												I am currently a Junior in my Software Development BAS. 
											</p>
											<p class="tm-text">
												I was wandering aimlessly in life unsure of what I wanted to do, but was lucky enough to find a major passion for Software and Web Development while in school, so now I am eating, breathing, and sleeping both school and side projects.
											</p>
											<p class="tm-text">
												I am also seeking internships where I can be challenged and forced to grow. I absolutely love testing my ability to learn.  
											</p>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row tm-white-box-margin-b">
								<div class="col-12">
									<div class="tm-flex">
										<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
											<h2 class="tm-text-title">What I'm Doing</h2>
											<p class="tm-text">
												I am finishing a web application for iGrad, which will hopefully increase their currently horrible conversion rate. 
											</p>
											<p class="tm-text">
												I will also be learning C++ in the coming Winter Break, along with Ruby on Rails, I hope to start the development for a web application that will help me reduce the barrier of entry for attending tech meetups in Seattle.
											</p>
											<p class="tm-text">
												I plan to utilize both Meetup API and Google Map API to auto-generate routes and schedules for relevant meetups, this is mainly for my peers and I.
											</p>
										</div>
										<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
											<h2 class="tm-text-title">What I Enjoy</h2>
											<p class="tm-text">
												My favorite language is Javascript. I love how powerful it is. I love how it integrates (pseudo) object-oriented concepts along with functional programming. I love how far-spread it has become, infecting just about any platform you can think of. I love the Javascript libraries, most notably React. I really want to get into developing web games using Javascript and WebSockets.
											</p>
											<p class="tm-text">
												Other than that I enjoy what most sane people enjoy: Cats, games, coffee, tea, caffeine, sleep, energy drinks, and oddly enough, working with people.  
											</p>
										</div>
									</div>
								</div>
							</div>
							

						</div>

					</div>
				</div>
				<!-- .cd-full-width -->

			</li>


			<!-- Resume -->
			<li>
				<div class="cd-full-width">
					<div class="container iframe-container js-tm-page-content" data-page-no="2" data-page-type="gallery">
						
						<img src="img/resume1.png" alt="Resume Page 1">
						<img src="img/resume2.png" alt="Resume Page 2">

						<!-- echo (preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"])) ?
							'<div class="row justify-content-center"><a class="pull-xs-right tm-submit-btn mt-5" target="_blank" href="includes/resume.php">Download Resume</a></div>' : 
							'<iframe tabindex="-1" class="w-100 h-100" src="includes/resume.php"></iframe>'; -->

					</div>
				</div>
			</li>

			<!-- Contact -->
			<li>
				<div class="cd-full-width">
					<div class="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery">
						<div class="tm-contact-page">
							<div class="row">
								<div class="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
									<div class="tm-flex tm-contact-container">
										<div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
											<!-- contact form -->
											<form id="contact_form" action="includes/contact.php" method="post" class="tm-contact-form">
											<h2 class="tm-contact-info">Feel free to say Hi!</h2>
											<p class="tm-text"></p>
												<?php include('includes/contact_form.php'); ?>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>

		
			<!-- Login -->
			<li>
				<div class="cd-full-width">
					<div class="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery">
						<div class="tm-contact-page">
							<div id="login_form_container" class="row">
								<?php /*isset($_SESSION['userid']) && $_SESSION['userid'] == 2 ? include('includes/contact_table.php') : */include('includes/login_form.php'); ?>
							</div>

						</div>
					</div>
				</div>

			</li>
		</ul>
		<!-- .cd-hero-slider -->

		<!-- 		<footer class="tm-footer"> -->

		<!-- 			<div class="tm-social-icons-container text-xs-center">
                    <a href="#" class="tm-social-link"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="tm-social-link"><i class="fa fa-google-plus"></i></a>
                    <a href="#" class="tm-social-link"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="tm-social-link"><i class="fa fa-behance"></i></a>
                    <a href="#" class="tm-social-link"><i class="fa fa-linkedin"></i></a>
              </div> -->
		<!--                 
                <p class="tm-copyright-text">Copyright &copy; <span class="tm-copyright-year">current year</span> Your Company 
                
                 | Design: <a href="www.templatemo.com" target="_parent">Template Mo</a></p> -->

		<!-- 		</footer> -->

	</div>
	<!-- .cd-hero -->


	<!-- Preloader, https://ihatetomatoes.net/create-custom-preloading-screen/ -->
	<div id="loader-wrapper">

		<div id="loader"></div>
		<div class="loader-section section-left"></div>
		<div class="loader-section section-right"></div>

	</div>

	<!-- load JS files -->

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>


	<script src="js/hero-slider-main.js"></script>
	<!-- Hero slider (https://codyhouse.co/gem/hero-slider/) -->
	<script src="js/magnific-popup.min.js"></script>
	<!-- Magnific popup (http://dimsemenov.com/plugins/magnific-popup/) -->
	<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
	<script src="js/scripts.js"></script>
</body>

</html>