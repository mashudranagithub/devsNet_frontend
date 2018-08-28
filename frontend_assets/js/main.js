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
        normalScrollElements: '#Service_boxes'
    });



});