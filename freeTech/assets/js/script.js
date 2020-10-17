/*Navigation Bar */
$(document).ready(function(){
		var bottom=$("header").outerHeight();
		var header=$("header").offset().top + bottom;
     $(window).scroll(function(){
          // header fixed only when window width greater than 991px
         if($(window).width()>991){
     	if($(window).scrollTop()>=header){
     		$("header").addClass("sticky")
     	}
     	else{
     	 $("header").removeClass("sticky")	
     	}
     }
     })

     // navbar active link
     $(".navbar ul li a").click(function(){
     	 $(".navbar ul li a").removeClass("active")
     	 $(this).addClass("active");
     })
  
    $(".ham-burger").click(function(){
    	$(this).toggleClass("active")
    	$(".navbar").toggleClass("open");
    })
  
    /* Hide anchor link in url */
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 900);
    });

    /*Back-top-button */
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 900, 'easeInOutExpo');
      return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-content').isotope({
      itemSelector: '.card',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
	
	
  });
  
  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
})


var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disappear");
}