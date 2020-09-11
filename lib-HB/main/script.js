$(document).ready(function()
{   
    "use strict";

    // Scrollspy

    $('body').scrollspy({
        target: ".navbar-menu", offset: 80
    });   

    // WOW

    new WOW().init();

    // SmoothScroll

    var scroll = new SmoothScroll('a[href*="#"]');

    // Counter

     $('.counter').counterUp({
        delay: 15, 
        time: 2000
    });

    // owlCarousel

    $('.section-testimonials').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        autoplay:true,
        loop: true
    });

    // SmoothScroll

    
    var toArise = $('.btnToArise');

    $(window).scroll(function(){

        var myPosition = $(this).scrollTop();

        if(myPosition >= 890)
        {    
            toArise.fadeIn();
        }
        else
        {
            toArise.fadeOut();
        }

    });

    toArise.on('click', function()
    {
      $('html, body').animate({scrollTop: 0}, 500);
    });


    //------- Superfist nav menu  js --------//  

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    
    //------- Mobile Nav  js --------//  

    if ($('#nav-menu-container').length)
    {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });

        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('body').append($mobile_nav);

        $('body').append('<div id="mobile-body-overly"></div>');

        $(document).on('click', '.menu-has-children i', function(e) 
        {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) 
        {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-body-overly').toggle();
        });

        $(document).on('click', function(e)
        {
            var container = $("#mobile-nav, #mobile-nav-toggle");

            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                if ($('body').hasClass('mobile-nav-active')) 
                {
                    $('body').removeClass('mobile-nav-active');

                    $('#mobile-body-overly').fadeOut();

                }
            }
        });
    } 
    else if ($("#mobile-nav, #mobile-nav-toggle").length)
    {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
});  