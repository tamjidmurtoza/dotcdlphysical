(function($) {

  "use strict";

  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/
  $.exists = function(selector) {
    return $(selector).length > 0;
  };

 
  $(document).on("ready", function() {
    smoothMove();
    scrollUp();
    $('.toggle-nav').on('click', function() {
      $('.main-nav').slideToggle();
    })
  });


  /*--------------------------------------------------------------
    Smooth Move
  --------------------------------------------------------------*/
  function smoothMove() {
    if ($.exists('.smooth__move')) {
      $('.smooth__move').on('click', function() {
        var thisAttr = $(this).attr('href');
        if ($(thisAttr).length) {
          var scrollPoint = $(thisAttr).offset().top - 85;
          $('body,html').animate({
            scrollTop: scrollPoint
          }, 800);
        }
        return false;
      });
    }
  }

  /*--------------------------------------------------------------
    Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $('#scrollup').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });

  }

})(jQuery); // End of use strict
