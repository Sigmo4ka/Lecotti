$(document).ready(function () {
	//fancybox click outside
      $("[data-fancybox]").fancybox( {
        closeClickOutside : true
      });


$('.slick-gallery1').slick({   
    slidesToShow: 1,
    arrows: true,   
    fade: true,
     autoplay: true,
    autoplaySpeed: 6000,   
    responsive: [
    {
      breakpoint: 1320,
      settings: {
        arrows: false
      }
    }
  ]   
  });
	
  $('.slick-gallery2').slick({    
    slidesToShow: 1,
    arrows: true,   
    waitForAnimate: false
  });

  $('.slick-gallery3').slick({   
     centerMode: true,
    centerPadding: '130px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,   
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 730,
      settings: {        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {        
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ] 
  });

$('.slick-gallery4').slick({   
    arrows: false,
    centerMode: true,
  centerPadding: '240px',
  slidesToShow: 2,
   rtl: true,
    autoplay: true,   
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 730,
      settings: {       
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {       
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  });

$('.slider-results').slick({   
    arrows: true,   
  slidesToShow: 4,
    centerMode: false,
    // autoplay: true,   
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        // arrows: false,
        
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1040,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 880,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {   
        dots: true,     
        slidesToShow: 1
      }
    }
  ]

  });


$('.slick-gallery5').slick({   
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,   
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        
        slidesToShow: 1
      }
    }
  ]

  });



	$('.open-popup-link').magnificPopup({
        mainClass: 'mfp-fade1',
        removalDelay: 500,
        type:'inline',
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        callbacks: {
          open: function() { 
              $('.closed-c').on('click',function(event){
                event.preventDefault();
                $.magnificPopup.close();
              }); 
          }
        }
      });
  // Video popup, Backend enforces embed URL before it gets here.
    $('.js-popup-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) { return url },
                    src: '%id%'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function (url) { return url },
                    src: '%id%'
                }
            }
        }
    });
    



      // slick small header in top
      $nav = $(".sga-nav");
      $menu = $(".top-nav");
        $window = $(window);
        // Определяем координаты верха блока навигации
        $h = $menu.offset().top+50;
        // if (window.innerWidth > 300) {
        //     $window.scroll(function(){         
        //         if ( $window.scrollTop() > 70) {
        //                $nav.addClass("fixed");
        //                $nav.slideDown('slow');              
        //         }else{              
        //             $nav.removeClass("fixed");           
        //         }
        //     });
        // }
        if (window.innerWidth > 1000) {
            $window.scroll(function(){         
                if ( $window.scrollTop() > 100) {
                       $nav.addClass("fixed");
                       $nav.slideDown('slow');              
                }else{              
                    $nav.removeClass("fixed");           
                }
            });

        }
// right scroll with sticky header
      $("body").on('click', '[href*="#nav"]', function (e) {
            var fixed_offset = 54;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
            if (window.innerWidth < 600) {
              var fixed_offset = 0;
               $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
            }
        });

     
     
     
    $('.tab-content1 .btn-more').click(function() {       
        $('.tab-content1 .colors-ul-hidden').css({'display': 'flex'});            
        $('.tab-content1 .btn-more').toggle('.activ');        
    });

    $('.tab-content2 .btn-more').click(function() {       
        $('.tab-content2 .colors-ul-hidden').css({'display': 'flex'});            
         $('.tab-content2 .btn-more').toggle('.activ');       
    });


      //scroll up  
     $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
          } else {
          $('.scrollup').fadeOut();
          }
        });         
        $('.scrollup').click(function(){
          $("html, body").animate({ scrollTop: 0 }, 600);
          return false;
        });


        // for mask in-form phone
         $(".phone-in-form").mask("+7 (999) 999 - 99 - 99");



});


// forms

    $(function () {

      $('#form1').on('submit', function (e) {

        e.preventDefault();
      var form = $(this);

        $.ajax({
          type: 'post',
          url: 'mail1.php',
          data: $('#form1').serialize(),
          success: function () {
           // yaCounter25048409.reachGoal('sheduleForm');
           // gtag('event', 'sheduleForm', {'event_category': 'form'});
           $.magnificPopup.open({
              items: {
                  src: '#popup3' 
              },
              mainClass: 'mfp-fade1',
              removalDelay: 500,
              type: 'inline',
              callbacks: {
                open: function() { 
                    $('.closed-c').on('click',function(event){
                      event.preventDefault();
                      $.magnificPopup.close();
                    }); 
                }
              }
            });
        

        
           $('#form1')[0].reset();
          }
        });
      });
});




