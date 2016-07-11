(function($) {

    $(document).ready(documentReadyFunction);
    $(window).resize(windowResizeFunction);

    function documentReadyFunction() {
        // functions for document ready
        onPageLoadOrResize();
        onPageLoad();
    }

    function windowResizeFunction() {
        // functions for window resize
        onPageLoadOrResize();
    }

    function onPageLoad() {
	    /* -----------------------------
		LOAD LARGE IMAGES
		----------------------------- */
			$('main img').each(function() {
				var path = $(this).data('large');
				var target = $(this);
				loadImage(path, target);
			});
		
		/* -----------------------------
		LOAD FULL RES IMAGES
		----------------------------- */
			$('main img').each(function() {
				var path = $(this).data('original');
				var target = $(this);
				loadImage(path, target);
			});
    	
    }

    function onPageLoadOrResize () {
	    /* -----------------------------
		SIZE MASONRY IMAGES
		----------------------------- */
	    	$('.masonry-image').each(function() {
	    		var img = $(this).children();
	    		var width = $(this).width() - (parseInt($(img).css('margin')) * 2);
	    		
	    		var ratio = $(img).data('ratio');
	    		var height = Math.floor( width / ratio );
	    		width = Math.floor( width );
	    		
	    		$(img).attr('width', width);
	    		$(img).attr('height', height);
	    	});
    	
    	/* -----------------------------
		INITIATE MASONRY LAYOUT
		----------------------------- */
			if($(".masonry").length != 0) {
				var container = document.querySelector('.masonry');
				var msnry = new Masonry( container, {
				    itemSelector: 'article'
				});
				
				msnry.on( 'layoutComplete', function( msnryInstance, laidOutItems ) {
				    $( "article" ).animate({
						opacity: 1
					}, 2000, function() {
						// Animation complete.
					});
				});
				
				msnry.layout();
			}
	    
	    /* -----------------------------
		POSITION SLIDESHOW
		----------------------------- */
			if($("#slideshow").length != 0) {
		    	var slideshowPosition = $('#slideshow').offset();
				var slideshowHeight = window.innerHeight - (slideshowPosition.top + 100);
				
				if(slideshowHeight < 300) {
					slideshowHeight = 300;
				}
				
				$('#slideshow .item').height(slideshowHeight);
				
				$( "#slideshow" ).animate({
					opacity: 1
				}, 2000, function() {
					// Animation complete.
				});
			}
    	
    	/* -----------------------------
		PLACE THE FOOTER
		----------------------------- */
    		placeFooter();
    }
    
    /* -----------------------------
	SUPPORT FUNCTIONS
	----------------------------- */
		/* -----------------------------
		ARRANGE THE FOOTER TO THE BOTTOM
		----------------------------- */
		    function placeFooter() {
			    $('footer').removeClass('footer-to-bottom');
		    	var footerPosition = $('footer').offset();
				var footerBottom = footerPosition.top + $('footer').outerHeight();
		    	
		    	if(footerBottom < window.innerHeight) {
			    	$('footer').addClass('footer-to-bottom');
		    	} else {
			    	$('footer').removeClass('footer-to-bottom');
		    	}
		    }
	    
	    /* -----------------------------
		LOAD A HIGHER RES IMAGE
		----------------------------- */
		    function loadImage(path, target) {
		    	$('<img src="'+ path +'">').load(function() {
					$(target).attr('src', path);
		    	});
		    }

})(jQuery);