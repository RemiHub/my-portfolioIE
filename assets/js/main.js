/*
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 10

		};

	// Breakpoints.
		breakpoints({
			wide:    [ '1081px',  '1680px' ],
			normal:  [ '841px',   '1080px' ],
			narrow:  [ '737px',   '840px'  ],
			mobile:  [ null,      '736px'  ]
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-scroll');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly-middle').scrolly({
			speed: 1000,
			anchor: 'middle'
		});

		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return (breakpoints.active('<=mobile') ? 70 : 190); }
		});

		$('.button-up').scrolly({
			speed: 1000
		});

		$('.button-up-two').scrolly({
			speed: 1000
		});

		$('.button-down-three').scrolly({
			speed: 1000
		});


		

		

	// Parallax background.

		// Disable parallax on IE/Edge (smooth scrolling is jerky), and on mobile platforms (= better performance).
			if (browser.name == 'ie'
			||	browser.name == 'edge'
			||	browser.mobile)
				settings.parallax = false;

		if (settings.parallax) {

			var $dummy = $(), $bg;

			$window
				.on('scroll.overflow_parallax', function() {

					// Adjust background position.
						$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

				})
				.on('resize.overflow_parallax', function() {

					// If we're in a situation where we need to temporarily disable parallax, do so.
						if (breakpoints.active('<=narrow')) {

							$body.css('background-position', '');
							$bg = $dummy;

						}

					// Otherwise, continue as normal.
						else
							$bg = $body;

					// Trigger scroll handler.
						$window.triggerHandler('scroll.overflow_parallax');

				})
				.trigger('resize.overflow_parallax');

		}

		//form submit

		

	// Poptrox.
		$('.gallery').poptrox({
			useBodyOverflow: false,
			usePopupEasyClose: false,
			overlayColor: '#0a1919',
			overlayOpacity: 0.75,
			usePopupDefaultStyling: false,
			usePopupCaption: true,
			popupLoaderText: '',
			windowMargin: 10,
			usePopupNav: true
		});

})(jQuery);




//check email is valid email format
const email = document.getElementById('email-reg-ex');
const form = document.querySelector('form');


//check email is valid with regex
function checkEmail(input){
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input)){
		alert('Message sent, thank you');
		
    } else {
		alert('Email is not valid');
		// console.log(input.value)
    }
}

//submit message ok or not?
form.addEventListener('submit', function(e) {
	e.preventDefault();
	
    checkEmail(email.value);
});

//SEND MESSAGE TO EMAIL!!