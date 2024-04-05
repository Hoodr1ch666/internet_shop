window.addEventListener('scroll', function () {
   document.getElementById('header-nav').classList.toggle('headernav-sroll', window.scrollY > 135);
});

$(document).ready(function () {

   $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
         $('#top').fadeIn();
      } else {
         $('#top').fadeOut();
      }
   });

   $('#top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
   });

   $(".owl-carousel-full").owlCarousel({
      margin: 20,
      responsive: {
         0: {
            items: 1
         },
         500: {
            items: 2
         },
         700: {
            items: 3
         },
         1000: {
            items: 4
         }
      }
   });
});