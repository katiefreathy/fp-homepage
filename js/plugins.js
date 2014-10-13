// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
    
// });

$(document).ready(function(){
    
    $('.mobile-slider').slick({
        arrows: false,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        responsive: null,
        lazyLoad: 'ondemand',
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
        ]

          });
  if($(window).width() < 768) {
      // code to be executed if condition is true
      $('.desktop-slider').addClass('hidden');
    } 
  else {
    // code to be executed if condition is false
    $('.desktop-slider').removeClass('hidden');
   
  }


    
        
});

