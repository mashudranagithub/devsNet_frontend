$(document).ready(function(){

    $('#Viewport').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });



    var x = $('#Header').offset().top; 
    
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        
        if(y>x){
            $('#Header').addClass('sticky');
            $('#Header').addClass('z-depth-1');
            $('#Header').removeClass('non-sticky');
           }else{
            $('#Header').removeClass('sticky');
            $('#Header').removeClass('z-depth-1');
            $('#Header').addClass('non-sticky');
           }
    });
    
    $('.sticky').wrapAll('<div class="cover">');
    $('.cover').css('height', $('#Header').outerHeight());


    $('.testimonial_slide').owlCarousel({
        loop:true,
        autoplay:5000,
        nav:false,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        smartSpeed: 4000,
        margin:0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });


// Viewport background effect
    $('#Viewport').mousemove(function(e){
        var moveX = (e.pageX * -1/15);
        var moveY = (e.pageY * -1/15);
        $('.slider_text .container').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Viewport').mousemove(function(e){
        var moveX = (e.pageX * -1/20);
        var moveY = (e.pageY * -1/20);
        $('.slider_text').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Header').mousemove(function(e){
        var moveX = (e.pageX * -1/15);
        var moveY = (e.pageY * -1/15);
        $('.slider_text .container').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Header').mousemove(function(e){
        var moveX = (e.pageX * -1/20);
        var moveY = (e.pageY * -1/20);
        $('.slider_text').css('background-position', moveX + 'px ' + moveY + 'px');
    });




// Full page Scrolling effect
    new fullpage('#fullpage', {
        scrollBar:true,
        normalScrollElements: '#Service_boxes, #Footer, #Call_to_action, #Clients, #Testimonial'
    });

    // for smoot scrollling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



});




