
function adjustHeightOfPage(pageNo) {

	var pageContentHeight = 0;

	var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");

	if( pageType != undefined && pageType == "gallery") {
		pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
	}
	else {
		pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height() + 20;
	}

	// Get the page height
	var totalPageHeight = $('.cd-slider-nav').height() + pageContentHeight + $('.tm-footer').outerHeight();

	// Adjust layout based on page height and window height
	if(totalPageHeight > $(window).height()) 
	{
		$('.cd-hero-slider').addClass('small-screen');
		$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
	}
	else 
	{
		$('.cd-hero-slider').removeClass('small-screen');
		$('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
	}
}

/*
	Everything is loaded including images.
*/
$(function(){

	adjustHeightOfPage(1); // Adjust page height

	/* Gallery One pop up
	-----------------------------------------*/

	let verticesVideo = '<div class="container">' +
							'<div class="row">' +
								'<video loop autoplay="true" muted playsinline preload="none">' +
									'<source src="img/vertices.mp4" type="video/mp4">' +
									'Your browser does not support the video tag.' +
								'</video>' +
							'</div>' +
							'<div class="row text-white">' +
								'<div class="col-12">' +	
								'<a href="//medium.com/@jakelandowski/small-graph-rendering-demo-with-two-js-5ef83fce476c" target="_blank">Tutorial published on Medium.com</a><br>' +
									'A simple demo in rendering with Two.js and simulating graph connections between vertices. ' +
									'On click creates vertices and each time it will connect edges to other random vertices. ' +
									'I did this to practice rendering with Two.js so me and my friend <a href="//www.linkedin.com/in/rmarlow" target="_blank">Ryan Marlow</a> ' +
									'can construct the view in our Graph Library and eventual Game.' +  
								'</div>' +
								'<a href="//jlandowski.greenriverdev.com/virus-theory/vertices.html" class="mt-3 mr-3 btn btn-primary" target="_blank">Demo</a>' +
								'<a href="//github.com/JakeLandowski/Virus-Theory" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
								'<a href="//medium.com/@jakelandowski/small-graph-rendering-demo-with-two-js-5ef83fce476c" class="mt-3 mr-3 btn btn-warning" target="_blank">Tutorial</a>' +
							'</div>' +
						'</div>';                

	$('#vertices').magnificPopup({                
	items: { src: verticesVideo, type: 'inline' }
	});

	let mpowermentVideo = '<div class="container">' +
						'<div class="row">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
								'<source src="img/mpowerment.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'</div>' +
						'<div class="row text-white">' +
							'<div class="col-12">' +	
								'Worked on the Admin Dashboard for the Mpowerment Website. A non-profit organization whose ' +
								'focus is on HIV prevention in the Gay Community. I constructed 100% of the Front End from scratch for the Admin Dashboard ' +
								'which uses AJAX for all database requests, and uses Google\'s SearchBox API to gather location data ' +
								'to allow the owners the site easily add accurate location data for various testing centers to be displayed ' +
								'on our map page. Focus on Scrum methodology with an amazing team of 4 developers.' +  
							'</div>' +
							'<a href="//bitsplz.greenriverdev.com/mpowerment/admin" class="mt-3 mr-3 btn btn-primary" target="_blank">Demo</a>'
						'</div>' +
					'</div>';                

	$('#mpowerment').magnificPopup({                
	items: { src: mpowermentVideo, type: 'inline' }
	});

	let forumVideo = '<div class="container">' +
						'<div class="row">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
								'<source src="img/forum.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'</div>' +
						'<div class="row text-white">' +
							'<div class="col-12">' +	
								'Created a forum from scratch using PHP FatFree MVC framework. Created ' +
								'a CRUD library to abstract secure database calls and used an N-Gram ' +
								'based approach to store and generate sentences based on user content. ' +
								'The algorithm parses and stores all user content to create a data structure ' +
								'that is used to procedurally generate content in their absence using a php script and a cron job.' +  
							'</div>' +
							'<a href="//jlandowski.greenriverdev.com/328/fauxrum/" class="mt-3 mr-3 btn btn-primary" target="_blank">Demo</a>' +
							'<a href="//github.com/JakeLandowski/fauxrum" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
						'</div>' +
					'</div>';                

	$('#forum').magnificPopup({                
		items: { src: forumVideo, type: 'inline' }
	});


	let igradVideo = '<div class="container">' +
						'<div class="row">' +
							'<video loop autoplay="true" muted playsinline preload="none">' + 
								'<source src="img/igrad.webm" type="video/webm">' +
								'<source src="img/igrad.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'</div>' +
						'<div class="row text-white">' +
							'<div class="col-6">' +	
								'Worked on an agile team of 4 focused on making Kent School District\'s' +
								'grueling 40 page ' +
								'application process as simple as possible while helping ' +
								'the iGrad staff go paperless.' +
							'</div>' +
							'<div class="col-6">' +
								'I worked on the initial CSS theme and focused on the backend php. I created ' +
								'a component based self validating and rendering system to allow our team to ' +
								'create numerous functioning forms from simple specifications. Also implemented ' +
								'ajax called client side.' +   
							'</div>' +
							'<a href="//gitgud.greenrivertech.net/" class="mt-3 mr-3 btn btn-primary" target="_blank">Demo</a>' +
						'</div>' +
					'</div>';                



	$('#igrad').magnificPopup({
//                     delegate: 'a', // child items selector, by clicking on it popup will open
//                     type: 'video',
//                     gallery:{enabled:true}                
		items: { src: igradVideo, type: 'inline' }
	});
	
	
	let webcrawlerVideo = '<div class="container">' +
								'<div class="row">' +
									'<video loop autoplay="true" muted playsinline preload="none">' + 
										'<source src="img/web_crawler.mp4" type="video/mp4">' +
										'Your browser does not support the video tag.' +
									'</video>' +
								'</div>' +
								'<div class="row text-white">' +
									'<div class="col-12">' +	
										'A study on concurrency/threads. Java program that downloads and parses web pages for their links and continues downloading. ' +
										'Tracks keywords entered and shows the rate at which they are found.' +
									'</div>' +
								'</div>' +
							'</div>';                



	$('#web_crawler').magnificPopup({           
		items: { src: webcrawlerVideo, type: 'inline' }
	});
	

	let csVideo = 
	'<div class="container">' +
					'<div class="row">' +
						'<div class="col-10 offset-1">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
							'<source src="img/cs_advising.webm" type="video/webm">' +
							'<source src="img/cs_advising.ogg" type="video/ogg">' + 
							'<source src="img/cs_advising.mp4" type="video/mp4">' +
							'Your browser does not support the video tag.' +
						'</div>' +
				  '</video>' +
					'</div>' +
					'<div class="row text-white">' +
						'<div class="col-6">' +	
							'Final Project for my Javascript class. I accepted my teacher\'s challenge of trying to ' +
							'simplify the documentation for describing class requirements for Washington\'s new Computer Science ' +
							'Transfer Degree to 4 year universities. My obsession at the ' +
							'time was Single Page Applications, which drove the inspiration for this project.'  +
						'</div>' +
						'<div class="col-6">' +
							'I created a non-scrolling page who\'s contents are manipulated 100% through Javascript,' +
							'leading from a starting screen to a 3 panel window that lets you compare the summary of each university, and then select one' +
							'for more details on that university. Heavy focus on performant animation and DOM manipulation.' +
						'</div>' +
						'<a href="//jlandowski.greenrivertech.net/207/final" class="mt-3 mr-3 btn btn-primary" target="_blank">Demo</a>' +
						'<a href="//github.com/JakeLandowski/JavascriptFinal" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
					'</div>' +
				'</div>';




	$('#cs_advising').magnificPopup({
		items: { src: csVideo, type: 'inline' }
	});

	let tetrisVideo = '<div class="container">' +
					'<div class="row">' +
						'<div class="col-10 offset-1">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
							'<source src="img/tetris.webm" type="video/webm">' +
							'<source src="img/tetris.mp4" type="video/mp4">' +
							'Your browser does not support the video tag.' +
						'<div>' +
					'</video>' +
					'</div>' +
					'<div class="row text-white">' +
						'<div class="col-6">' +	
							'Very simple demo of a tetris game in Java ACM graphics library. ' +
							'An attempt at matrix programming when I didn\'t have any experience with such things.' + 
						'</div>' +
						'<a href="//github.com/JakeLandowski/JavaWork/tree/master/219Final" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
					'</div>' +
				'</div>';      


	$('#tetris').magnificPopup({
		items: { src: tetrisVideo, type: 'inline' }
	});

	let asteroidsVideo = '<div class="container">' +
					'<div class="row">' +
						'<div class="col-10 offset-1">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
								'<source src="img/asteroids.webm" type="video/webm">' +
								'<source src="img/asteroids.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'</div>' +
					'</div>' +
					'<div class="row text-white">' +
						'<div class="col-6">' +	
							'A rough recreation of the Asteroids arcade game, made in Java using ACM graphics library.' +
						'</div>' +
						'<a href="//github.com/JakeLandowski/JavaWork/tree/master/AsteroidsGame" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
					'</div>' +
				'</div>';      



	$('#asteroids').magnificPopup({
		items: { src: asteroidsVideo, type: 'inline' }
	});


	let fireworksVideo =  '<div class="container">' +
					'<div class="row">' +
						'<div class="col-10 offset-1">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
								'<source src="img/fireworks.webm" type="video/webm">' +
								'<source src="img/fireworks.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +	
						'</div>' +
					'</div>' +
					'<div class="row text-white">' +
						'<div class="col-12">' +	
							'A study on a fractal/recursive algorithm to create pretty effects. Made in Java.' +
						'</div>' +
						'<a href="//github.com/JakeLandowski/JavaWork/tree/master/FIreworksFactory" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
					'</div>' +
				'</div>';


	$('#fireworks').magnificPopup({
		items: { src: fireworksVideo, type: 'inline' }
	});

	let starsVideo = '<div class="container">' +
					'<div class="row">' +
						'<div class="col-10 offset-1">' +
							'<video loop autoplay="true" muted playsinline preload="none">' +
								'<source src="img/stars.webm" type="video/webm">' +
								'<source src="img/stars.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'<div>' +
					'</div>' +
					'<div class="row text-white">' +
						'<div class="col-12">' +	
							'I tried to recreate the classic warp speed type of screensaver, but realized ' +
							'in the end that I did it backwards so it\'s actually more of a blackhole screensaver ' +
							':D. The program populates a set amount of "particles" and then recycles them by ' +
							'positioning them to a new random location outside of the screen once they reach the center.' +
						'</div>' +
						'<a href="//github.com/JakeLandowski/JavaWork/tree/master/Screensaver" class="mt-3 mr-3 btn btn-success" target="_blank">Github Repo</a>' +
					'</div>' +
				'</div>';

	$('#stars').magnificPopup({
		items: { src: starsVideo, type: 'inline' }
	});


// 				/* Gallery Two pop up
//                 -----------------------------------------*/
// 				$('.gallery-two').magnificPopup({
//                     delegate: 'a',
//                     type: 'image',
//                     gallery:{enabled:true}                
//                 });

//                 /* Gallery Three pop up
//                 -----------------------------------------*/
//                 $('.gallery-three').magnificPopup({
//                     delegate: 'a',
//                     type: 'image',
//                     gallery:{enabled:true}                
//                 });

	/* Collapse menu after click 
	-----------------------------------------*/
	$('#tmNavbar a').click(function(){
		$('#tmNavbar').collapse('hide');

		adjustHeightOfPage($(this).data("no")); // Adjust page height       
	});

	/* Browser resized 
	-----------------------------------------*/
	$( window ).resize(function() {
		var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");

		// wait 3 seconds
		setTimeout(function() {
			adjustHeightOfPage( currentPageNo );
		}, 1000);

	});

	// Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
	$('body').addClass('loaded');

	// Write current year in copyright text.
	$(".tm-copyright-year").text(new Date().getFullYear());

	

	
	let $contactForm = $('#contact_form');
	let $loginFormContainer = $('#login_form_container');
	
		//	SET CONTACT FORM HANDLERS
	$contactForm.on('submit', function(e){
		
		let $form = $(this);
		
		e.preventDefault();
		
		let data = {};
		
		let $inputs = $form.find('input');
		$inputs.each(function(i, input){
			
			data[$(input).attr('name')] = $(input).val();
			
		});
		
		data[$form.find('textarea').attr('name')] = $form.find('textarea').val();
		
		$.ajax({
			
			url: 'includes/contact_form.php',
			method: ($form.find('#contact_again').length !== 0) ? 'GET' : 'POST',
			data: data,
			success: function(response){
				
				$form.html(response);
				
			}
		}); 
		
	}); // end contactForm.on
	
	
	
		//	SET LOGIN FORM HANDLERS
	if($loginFormContainer.length)
	{
		$loginFormContainer.on('submit', function(e){

			let $form = $(this);

			e.preventDefault();

			let data = {};

			let $inputs = $form.find('input');
			$inputs.each(function(i, input){

				data[$(input).attr('name')] = $(input).val();

			});

			postForm($form, data); 

		}); // end loginForm.on
	}
	
	
		/* Form Handling 
	-------------------------------------------------------*/
	if($('#contact_table').length)
	{
		$loginFormContainer.off('submit');
		$('#contact_table').DataTable();
		
		$('#table_refresh').on('click', function(){

			getTable($loginFormContainer);

		});
		
		$('#logout').on('click', function(){
							
			logout($loginFormContainer);

		});
	}
	
		//	POST TO FORM
	function postForm($form, data)
	{
		$.ajax({

				url: 'includes/login_form.php',
				method: 'POST',
				data: data,
				success: function(response){

					$form.html(response);

					if($('#contact_table').length)
					{
						$loginFormContainer.off('submit');
						$('#contact_table').DataTable();
						
						$('#table_refresh').on('click', function(){

							getTable($loginFormContainer);

						});
						
						$('#logout').on('click', function(){
							
							logout($loginFormContainer);
							
						});
					}
				}
			});
	}
	
		//	REFRESH TABLE
	function getTable($form)
	{
		$.ajax({

				url: 'includes/contact_table.php',
				method: 'GET',
				success: function(response){

					$form.html(response);

					if($('#contact_table').length)
					{
						$loginFormContainer.off('submit');
						$('#contact_table').DataTable();

						$('#table_refresh').on('click', function(){

							getTable($loginFormContainer);

						});
						
						$('#logout').on('click', function(){
							
							logout($loginFormContainer);
							
						});
					}
				}
			});
	}
	
		//	KILL SESSION AND RETURN TO LOGIN PAGE
	function logout($form)
	{
		$.ajax({

				url: 'includes/logout.php',
				method: 'GET',
				success: function(response){

					$form.html(response);

					if($loginFormContainer.length)
					{
						$loginFormContainer.on('submit', function(e){

							let $form = $(this);

							e.preventDefault();

							let data = {};

							let $inputs = $form.find('input');
							$inputs.each(function(i, input){

								data[$(input).attr('name')] = $(input).val();

							});

							postForm($form, data); 

						}); // end loginForm.on
					}
					
					
				}
			});
	}
	
	
	
	
	
}); // END DOCUMENT READY
