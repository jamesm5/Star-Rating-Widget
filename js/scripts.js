(function(){
	
	var star_rating_default = 10;

	function buildStarRatingWidget(stars) {

		//build the script here

		// output pre-existing rated stars
  		$('.star-rating-widget').each(function() { //for each div
  			for (var i = 0, len = parseInt($(this).attr("data-rating")); i < len; i++) {
    			$('<img src="img/star-on.svg" />').appendTo($(this));
  			}
		});


  		//handles output for value of stars passed into widget
		if (star_rating_default === 0) {
			return;

			} else if (star_rating_default === 1) {
				$('.container').append('<div class="new-star-rating-widget" data-rating="1"></div>');
			 	for (i = 0; i < 1; i++) {		
	    			$('.new-star-rating-widget').prepend('<img src="img/star.svg" />');
				}

			} else if (star_rating_default === 2) {
				$('.container').append('<div class="new-star-rating-widget" data-rating="2"></div>');
			 	for (i = 0; i < 2; i++) {
	    			$('.new-star-rating-widget').prepend('<img src="img/star.svg" />');
	    		}

			} else if (star_rating_default === 3) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="3"></div>');
			 	for (i = 0; i < 3; i++) {
	    			$('.new-star-rating-widget').prepend('<img src="img/star.svg" />');
	    		}

			} else if (star_rating_default === 4) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="4"></div>');
			 	for (i = 0; i < 4; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    		}

			} else if (star_rating_default === 5) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="5"></div>');
			 	for (i = 0; i < 5; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    		}

			} else if (star_rating_default === 6) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="6"></div>');
			 	for (i = 0; i < 6; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    		}

			} else if (star_rating_default === 7) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="7"></div>');
			 	for (i = 0; i < 7; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    		}
			} else if (star_rating_default === 8) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="8"></div>');
			 	for (i = 0; i < 8; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    	}
			} else if (star_rating_default === 9) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="9"></div>');
			 	for (i = 0; i < 9; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    	}
			} else if (star_rating_default === 10) {
			 	$('.container').append('<div class="new-star-rating-widget" data-rating="10"></div>');
			 	for (i = 0; i < 10; i++) {
	    			$('.new-star-rating-widget').append('<img src="img/star.svg" />');
	    	}
			} else {
			 	alert('Too many stars! Please enter a value from 1-10 :)');
			 return;
		}

		//on mouseover, 'turn on' (multiple) stars
		$(".new-star-rating-widget > img") .mouseover(function () {
	   		this.src= "img/star-hover.svg";
		}).mouseout(function () {
	    	this.src= "img/star.svg";
	    });

		$(".new-star-rating-widget > img").mouseover(function () {
		// Get index of star that is being hovered over
		var index = $(".new-star-rating-widget > img").index(this);
		console.log(index);//correct in console?

		// Loop only over the stars that should be highlighted and highlight them.
		// Use the index to know how many to loop over (index +1!)
		for(var i = 0; i < index + 1; i++){
  		// "Light up" the star:
  		$(".new-star-rating-widget > img")[i].src= "img/star-hover.svg";
		}

		//'Turn Off' stars onmouseout
		}).mouseout(function () {
    		
    		$(".new-star-rating-widget > img").each(function(){
    			this.src = "img/star.svg";
  			});
		});

		$('.new-star-rating-widget > img').click(function(){
			var index = $(".new-star-rating-widget > img").index(this);
			//update data-rating attribute in markup
			$('.new-star-rating-widget').attr("data-rating",parseInt(index)+1);
			for(var i = 0; i < index + 1; i++){
			$(".new-star-rating-widget > img")[i].src= "img/star-on.svg";
		}
		});

		

		console.log(stars);
	}

	// initialise the function
	buildStarRatingWidget(star_rating_default);

})();