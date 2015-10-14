
$(document).ready(function(){

	/* SCROLL EASING ON ANCHORS */

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
                $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = target;
        });
    });
});
    /* PARALLAX SCROLLING EFFECT */
	(function(){

  		var parallax = document.querySelectorAll(".parallax"),
      	speed = 0.6;

        /* REMOVE IF NOT USED
      var basket = document.querySelectorAll(".basket"),
        speed = 0.3;*/

  		window.onscroll = function(){
      	[].slice.call(parallax).forEach(function(el,i){
        	var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";        
        	el.style.backgroundPosition = elBackgrounPos;

    	});      
  		};

	})(); 
  /**/
/*! modernizr 3.0.0-alpha.4 (Custom Build) | MIT *
 * http://modernizr.com/download/#-bgsizecover !*/


