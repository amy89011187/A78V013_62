  $(function() {
      $('.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('key')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });

  });
