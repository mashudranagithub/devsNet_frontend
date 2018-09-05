$(document).ready(function(e){

  if( !e ) e = window.event;

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
        var moveX = (e.pageX * 1/75);
        var moveY = (e.pageY * 1/75);
        $('.slider_text').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Viewport').mousemove(function(e){
        var moveX = (e.pageX * 1/55);
        var moveY = (e.pageY * 1/55);
        $('.slider_text_bg').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Header').mousemove(function(e){
        var moveX = (e.pageX * 1/25);
        var moveY = (e.pageY * 1/25);
        $('.slider_text').css('background-position', moveX + 'px ' + moveY + 'px');
    });

    $('#Header').mousemove(function(e){
        var moveX = (e.pageX * 1/30);
        var moveY = (e.pageY * 1/30);
        $('.slider_text_bg').css('background-position', moveX + 'px ' + moveY + 'px');
    });





// for smoot scrollling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(e) {
    if( !e ) e = window.event;
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


// for scrollify
        $(function() {
          $.scrollify({
            section : ".example-classname",
            sectionName : "false",
            interstitialSection : ".header, .call_to_action, .testimonial, .clients, .footer",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: ".boxes, .modalbox",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
          });
        });





$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#back-to-top').fadeIn(1000);
  } else {
    $('#back-to-top').fadeOut(1000);
  }
});
// scroll body to 0px on click
$('#back-to-top').click(function () {
  // $('#back-to-top').tooltip('hide');
  $('body,html').animate({
    scrollTop: 0
  }, 1500);
  return false;
});

$('#back-to-top').tooltip('show');





});


function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  // document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}



