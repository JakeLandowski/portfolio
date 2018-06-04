
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

	let forumVideo = '<div class="container">' +
						'<div class="row">' +
							'<video loop autoplay="true" muted playsinline preload="none">' + 
								'<source src="img/igrad.webm" type="video/webm">' +
								'<source src="img/igrad.mp4" type="video/mp4">' +
								'Your browser does not support the video tag.' +
							'</video>' +
						'</div>' +
						'<div class="row text-white">' +
							'<div class="col-12">' +	
								'Created a forum from scratch using PHP FatFree MVC framework. Created ' +
								'a CRUD library to abstract secure database calls and used an N-Gram ' +
								'based approach to store and generate sentences based on user content.' +
							'</div>' +
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
								'Working on a user-friendly web application process for Kent School District\'s iGrad program, ' +
								'who assist under-privileged youth and high-school drop outs get their degrees.' +
						'</div>' +
						'<div class="col-6">' +
							'My team is focusing on making their grueling 40 page ' +
							'application process as simple as possible while helping ' +
							'the iGrad staff go paperless.' +
						'</div>' +
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
										'A Java program that downloads and parses web pages for their links and continues downloading. ' +
										'Tracks keywords entered and shows the rate at which they are found' +
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
						'This was my Final Project for our Javascript class. I took my teacher\'s challenge of trying to ' +
						'simplify the documentation for describing class requirements for Washington\'s new Computer Science ' +
						'Transfer Degree for various 4 year universities When I was first learning Javascript my obsession at the ' +
						'time was Single Page Applications, which was the driving inspiration for this project.'  +
					'</div>' +
					'<div class="col-6">' +
						'I created a non-scrolling page who\'s contents are manipulated 100% through Javascript,' +
						'leading from a starting screen to a 3 panel window that lets you compare the summary of each university, and then select one' +
						'for more details on that university.' +
					'</div>' +
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

					'</div>' +
					'<div class="col-6">' +

					'</div>' +
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

					'</div>' +
					'<div class="col-6">' +

					'</div>' +
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
						'<div class="col-6">' +	

					'</div>' +
					'<div class="col-6">' +

					'</div>' +
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
							'This was for the first ' +
							'assignment for the class where we were to create an animated screensaver. ' +
							'I tried to recreate the classic warp speed type of screensaver, but realized ' +
							'in the end that I did it backwards so it\'s actually more of a blackhole screensaver ' +
							':D. The program populates a set amount of "particles" and then recycles them by ' +
							'positioning them to a new random location outside of the screen once they reach the center.' +
						'</div>' +
						'<a href="//github.com/JakeLandowski/JavaWork/tree/master/Screensaver" class="btn btn-success" target="_blank">Github Repo</a>' +
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
