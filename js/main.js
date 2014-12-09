$(document).ready(function() {
    var time = 7; // time in seconds
 
    var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
      
	$.validate({
		validateOnBlur : false,
		showHelpOnFocus : false
	});
    $("#main-carousel").owlCarousel({
        stopOnHover : true,
        navigation:true,
        slideSpeed : 500,
        paginationSpeed : 500,
        goToFirstSpeed : 1000,
        afterInit : progressBar,
        afterMove : moved,
        startDragging : pauseOnDragging,
        singleItem : true,
        navigationText : ['<i class="flaticon-arrow-left"></i>','<i class="flaticon-arrow-right"></i>'],
        transitionStyle:"fadeUp"
    });
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    };
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    };
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    };
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    };
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    };
    $("#popular-carousel").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [960,4],
        itemsTablet: [640,3],
        itemsMobile : [479,2],
        itemsMobile : [400,1],
        autoPlay : true
    });
    $("#menu-carousel").owlCarousel({
        navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [960,3],
        itemsTablet: [640,2],
        itemsMobile : [479,2],
        itemsMobile : [400,1],
        transitionStyle : "fadeUp",
        autoPlay : true
    });
    $("#testimonials-carousel").owlCarousel({
        navigation : false,
        autoPlay : true,
        slideSpeed : 1500,
        goToFirstSpeed : 3000,
        paginationSpeed : 1500,
        transitionStyle : "fadeUp",
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [900,1],
        itemsTablet: [640,2],
        itemsMobile : [479,1],
    });
    
    /////// Animations \\\\\\\\\\\
    $(".header .read-more,.header .purchase").hover(function(){
		$(this).removeClass('animated zoomInLeft zoomInRight');
		$(this).addClass('animated rubberBand');
	},function(){
		$(this).removeClass('animated rubberBand');
	});
    $("#sec3 form .btn, #sec7 form .btn, #sec7 .social a, #sec4 .item .btn").hover(function(){
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('animated pulse');
	});
    $("#menu-carousel .btn").hover(function(){
		$(this).addClass('animated item-select');
	},function(){
		$(this).removeClass('animated item-select');
	});
    $('#Modal').on('show.bs.modal', function (e) {
        $(this).addClass('animated zoomInDown');
    });
    $('.close-modal').on('click', function (e) {
        $(this).prevUntil('.modal').addClass('animated zoomOut');
    });
    $('#main-carousel .item .caption h3').addClass('animated zoomInDown');
    $('.header h1').addClass('animated zoomInUp');
    $('.header h3').addClass('animated lightSpeedIn');
    $('.read-more').addClass('animated zoomInLeft');
    $('.purchase').addClass('animated zoomInRight');
	$(window).scroll(function() {
		$('#sec2').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-200) {
				$(this).addClass("pullDown sec");
			}
		});
		$('#sec3').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-200) {
				$(this).addClass("pullDown sec");
			}
		});
		$('#sec4').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-200) {
				$(this).addClass("pullDown sec");
			}
		});
		$('#sec5').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-200) {
				$(this).addClass("pullDown sec");
			}
		});
		$('#sec6').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-200) {
				$(this).addClass("pullDown sec");
			}
		});
		$('#sec7').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()-100) {
				$(this).addClass("pullDown sec");
			}
		});
		$('footer').each(function(){
    		var imagePos = $(this).offset().top;
    		
    		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+$(window).height()) {
				$(this).addClass("pullDown sec");
			}
		});
	});
});