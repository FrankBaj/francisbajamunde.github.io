/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function displayWindowSize(){

    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
	var $inner = $('#sidebar_content'),
		$open_sidebar = $('#open'),
		$close_sidebar = $('#close');

	if(w <= 1280){
		document.getElementById("sidebar").classList.remove('open_sidebar');
		document.getElementById("wrapper").classList.remove('open_wrapper');
		document.getElementById("sidebar").classList.remove('close_sidebar');
		document.getElementById("wrapper").classList.remove('close_wrapper');
		$inner.show();
	} else if(w > 1280){
			if(document.getElementById('sidebar_content').style.display !== 'none' && 
				document.getElementById('open').style.display !== 'none'){
					$open_sidebar.hide();
					$close_sidebar.show();
			}
			document.getElementById("sidebar").classList.remove('open_sidebar_top');
			document.getElementById("wrapper").classList.remove('open_wrapper_top');
			document.getElementById("sidebar").classList.remove('close_sidebar_top');
			document.getElementById("wrapper").classList.remove('close_wrapper_top');
	}

	if(w <= 980){ //Starting from big screen, moving to small screen.
		if($('#elem3').hasClass('list_animation')){
			document.getElementById('elem3').classList.add('reverse_shift_name');
		}
		if($('#intro_para').hasClass('shift_right_animation')){
			document.getElementById('intro_para').classList.add('reverse_shift_intro');
		}

		if($('#elem3').hasClass('list_animation_small_screen')){
			if($('#elem3').hasClass('shift_name')){
				document.getElementById('elem3').classList.remove('shift_name');
			}
		}
		if($('#intro_para').hasClass('shift_right_animation_smallscreen')){
			if($('#intro_para').hasClass('shift_intro')){
				document.getElementById('intro_para').classList.remove('shift_intro');
			}
		}
	} else if (w > 980){ //Starting from small screen, moving to big screen.
		
		//Shift when width is above 980
		if($('#elem3').hasClass('list_animation_small_screen')){
			document.getElementById('elem3').classList.add('shift_name');
		}
		if($('#intro_para').hasClass('shift_right_animation_smallscreen')){
			document.getElementById('intro_para').classList.add('shift_intro');
		}

		//shift back when below Width
		if($('#elem3').hasClass('list_animation')){
			if($('#elem3').hasClass('reverse_shift_name')){
				document.getElementById('elem3').classList.remove('reverse_shift_name');
			}
		}
		if($('#intro_para').hasClass('shift_right_animation')){
			if($('#intro_para').hasClass('reverse_shift_intro')){
				document.getElementById('intro_para').classList.remove('reverse_shift_intro');
			}
		}
	}

	if(w > 736){
		$('#intro').addClass('stop-transition');
	} else if (w <= 736){
		if($('#intro').hasClass('stop-transition')){
			$('.wrapper.fullscreen').css({'padding':'13em 0'})
		}
	}
}

window.addEventListener("resize", displayWindowSize);
displayWindowSize();

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		// If the element is visible
		if (entry.isIntersecting) {
		  // Add the animation class
		  	if(entry.target.id == 'coding_text'){
				entry.target.classList.add('text_animation');
			}
			if (entry.target.id == 'bug_text'){
				entry.target.classList.add('text_animation');
			}
			if (entry.target.id == 'VC_text'){
				entry.target.classList.add('text_animation');
			}
		}
	  });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.getElementById("coding_text"));
  observer.observe(document.getElementById("bug_text"));
  observer.observe(document.getElementById("VC_text"));

(function($) {

	var $window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar'),
		$inner = $('#sidebar_content'),
		$width = document.documentElement.clientWidth,

		$open_sidebar = $('#open'),
		$close_sidebar = $('#close')

		$open_sidebar.hide()
		$close_sidebar.show()

	console.log($width);

	$window.on('beforeunload', function() {
		$window.scrollTop(0);
	});

	$close_sidebar.click(function(){
		document.getElementById("sidebar").classList.remove('open_sidebar');
		document.getElementById("wrapper").classList.remove('open_wrapper');

		document.getElementById("sidebar").classList.add('close_sidebar');
		document.getElementById("wrapper").classList.add('close_wrapper');

		$close_sidebar.hide();
		$inner.hide();
		$open_sidebar.show();
	})

	$open_sidebar.click(function(){
		document.getElementById("sidebar").classList.remove('close_sidebar');
		document.getElementById("wrapper").classList.remove('close_wrapper');

		document.getElementById("sidebar").classList.add('open_sidebar');
		document.getElementById("wrapper").classList.add('open_wrapper');

		$open_sidebar.hide();
		$inner.show();
		$close_sidebar.show();
	})

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

		// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
				if($width > 980){
					document.getElementById("elem1").classList.add('list_animation')
					document.getElementById("elem2").classList.add('list_animation')
					document.getElementById("elem3").classList.add('list_animation')
				}else if($width <= 980){
					document.getElementById("elem1").classList.add('list_animation_small_screen')
					document.getElementById("elem2").classList.add('list_animation_small_screen')
					document.getElementById("elem3").classList.add('list_animation_small_screen')
				}
			}, 100);

			document.getElementById("sidebar").classList.remove('open_sidebar');
			document.getElementById("wrapper").classList.remove('open_wrapper');
			document.getElementById("sidebar").classList.remove('open_sidebar_top');
			document.getElementById("wrapper").classList.remove('open_wrapper_top');

			if($width > 1280){		
				document.getElementById("sidebar").classList.add('close_sidebar');
				document.getElementById("wrapper").classList.add('close_wrapper');
				$inner.hide();
			}else if($width <= 1280){
				document.getElementById("sidebar").classList.add('close_sidebar_top');
				document.getElementById("wrapper").classList.add('close_wrapper_top');
				$inner.hide();
			}
		});

		window.setTimeout(function(){
			if($width > 980){
				document.getElementById("intro_para").classList.add('shift_right_animation')
			}else if($width <= 980){
				document.getElementById("intro_para").classList.add('shift_right_animation_smallscreen')
			}
		}, 4000)

		window.setTimeout(function() {
			document.getElementById("sidebar").classList.remove('close_sidebar');
			document.getElementById("wrapper").classList.remove('close_wrapper');
			document.getElementById("sidebar").classList.remove('close_sidebar_top');
			document.getElementById("wrapper").classList.remove('close_wrapper_top');

			if($width > 1280){
				document.getElementById("sidebar").classList.add('open_sidebar');
				document.getElementById("wrapper").classList.add('open_wrapper');
	
				$open_sidebar.hide();
				$close_sidebar.show()
				$inner.show();
			}else if($width <= 1280){
				document.getElementById("sidebar").classList.add('open_sidebar_top');
				document.getElementById("wrapper").classList.add('open_wrapper_top');
				$inner.show();
			}

			$body.removeClass('no_scroll_body');
		}, 5500);

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this)
						id = $this.attr('href'), 
						$cur_section = $(id),
						section_array = ['intro','one','two','three'];

						/*UNCOMMENT IF ADDING PORTFOLIO SECTION*/
						// if($cur_section[0].id == section_array[0]){
						// 	document.getElementById('one').classList.remove('style3');
						// 	document.getElementById('two').classList.remove('style3');
						// 	document.getElementById('three').classList.remove('style3');

						// 	document.getElementById('intro').classList.add('style3');
						// } else if($cur_section[0].id == section_array[1]){
						// 	document.getElementById('intro').classList.remove('style3');
						// 	document.getElementById('two').classList.remove('style3');
						// 	document.getElementById('three').classList.remove('style3');

						// 	document.getElementById('one').classList.add('style3');
						// } else if($cur_section[0].id == section_array[2]){
						// 	document.getElementById('intro').classList.remove('style3');
						// 	document.getElementById('one').classList.remove('style3');
						// 	document.getElementById('three').classList.remove('style3');

						// 	document.getElementById('two').classList.add('style3')
						// } else if($cur_section[0].id == section_array[3]){
						// 	document.getElementById('intro').classList.remove('style3');
						// 	document.getElementById('one').classList.remove('style3');
						// 	document.getElementById('two').classList.remove('style3');

						// 	document.getElementById('three').classList.add('style3')
						// } 

						// GET RID OF THIS IF ADDING PORTFOLIO SECTION
						if($cur_section[0].id == section_array[0]){
							document.getElementById('one').classList.remove('style3');
							document.getElementById('three').classList.remove('style3');

							document.getElementById('intro').classList.add('style3');
						} else if($cur_section[0].id == section_array[1]){
							document.getElementById('intro').classList.remove('style3');
							document.getElementById('three').classList.remove('style3');

							document.getElementById('one').classList.add('style3');
						} else if($cur_section[0].id == section_array[3]){
							document.getElementById('intro').classList.remove('style3');
							document.getElementById('one').classList.remove('style3');

							document.getElementById('three').classList.add('style3')
						} 



					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);


					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '',
							bottom: '',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');
									

							},
							enter: function() {
									var $cur_section = $(id);
									var section_array = ['intro','one','two','three'];

									/*UNCOMMENT IF ADDING PORTFOLIO SECTION*/
									// if($cur_section[0].id == section_array[0]){
									// 	if(document.getElementById('one').classList.contains('style3')){
									// 		document.getElementById('one').classList.remove('style3');
									// 	}
									// 	document.getElementById('intro').classList.add('style3');
									// } else if($cur_section[0].id == section_array[1]){
									// 	if(document.getElementById('intro').classList.contains('style3')){
									// 		document.getElementById('intro').classList.remove('style3');
									// 	}
									// 	if(document.getElementById('two').classList.contains('style3')){
									// 		document.getElementById('two').classList.remove('style3');
									// 	}
									// 	document.getElementById('one').classList.add('style3');
									// } else if($cur_section[0].id == section_array[2]){
									// 	if(document.getElementById('one').classList.contains('style3')){
									// 		document.getElementById('one').classList.remove('style3');
									// 	}
									// 	if(document.getElementById('three').classList.contains('style3')){
									// 		document.getElementById('three').classList.remove('style3');
									// 	}
									// 	document.getElementById('two').classList.add('style3')
									// } else if($cur_section[0].id == section_array[3]){
									// 	if(document.getElementById('two').classList.contains('style3')){
									// 		document.getElementById('two').classList.remove('style3');
									// 	}
									// 	document.getElementById('three').classList.add('style3')
									// } 

									// GET RID OF THIS IF ADDING PORTFOLIO SECTION
									if($cur_section[0].id == section_array[0]){
										if(document.getElementById('one').classList.contains('style3')){
											document.getElementById('one').classList.remove('style3');
										}
										document.getElementById('intro').classList.add('style3');
									} else if($cur_section[0].id == section_array[1]){
										if(document.getElementById('intro').classList.contains('style3')){
											document.getElementById('intro').classList.remove('style3');
										}
										if(document.getElementById('three').classList.contains('style3')){
											document.getElementById('three').classList.remove('style3');
										}
										document.getElementById('one').classList.add('style3');
									} else if($cur_section[0].id == section_array[3]){
										if(document.getElementById('one').classList.contains('style3')){
											document.getElementById('one').classList.remove('style3');
										}
										document.getElementById('three').classList.add('style3')
									} 


								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');



							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);