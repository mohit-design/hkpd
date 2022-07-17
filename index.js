$(function() {
  // Banner Slick Slider JS 
  $(".banner-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    customPaging: function(slick,index) {
      return '<a>' + (index + 1) + '</a>';
    }
  });
  // On Scroll Active Class and Remove Class
  $(".menu-listing-desktop, .menu-listing-mobile, .footer-menu-listing").onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 1400,
    scrollThreshold: 0.10,
    filter: '',
    easing: 'swing'
  });
  // Smooth Animation On Click of Navbar Menu
  $(".menu-listing-desktop > li > a, .menu-listing-mobile > li > a, .footer-menu-listing > li > a, .read-more").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offset = 50;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 1400);
    }
  });
  $(".footer-menu-listing > li > a").click(function() {
		var realMenu = $(this).attr("id");
		var realFixedMenu = realMenu + "h";
		$("#" + realFixedMenu).trigger("click");
	});
  // OnScroll Navbar Fixed
	$(window).scroll(function(){
	  if ($(window).scrollTop() >= 100) {
	    $(".bg-logo-navbar-menu-desktop").addClass("active");
	   } else {
	    $(".bg-logo-navbar-menu-desktop").removeClass(".active");
	   }
	});
});