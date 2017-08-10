window.sr = ScrollReveal({duration: 2000});
sr.reveal('.text', 400);

//
// $(document).ready(function() {
//   $('a').on('click', function(){
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 700, function(){
//         window.location.hash = hash;
//       });
//     }
//   });
//
// var stickyNavTop = $('.nav').offset().top;
// var stickyNav = function(){
//   var scrollTop = $(window).scrollTop();
//   if (scrollTop > stickyNavTop) {
//       $('.nav').addClass('sticky');
//   } else {
//       $('.nav').removeClass('sticky');
//   }
// };
//
// stickyNav();
//
// $(window).scroll(function() {
//   stickyNav();
// });
// });

var nav = $('.nav');
var scrolled = false;

$(window).scroll(function () {

    if (400 < $(window).scrollTop() && !scrolled) {
        nav.addClass('sticky').animate({top: '30px'});
        scrolled = true;
    }

   if (400 > $(window).scrollTop() && scrolled) {
         //animates it out of view
         if (screen.width < 648){
        nav.animate({ top: '9px' });
      } else {
        nav.animate({ top: '0px'})
      }
        //sets it back to default style
        nav.removeClass('sticky');

        scrolled = false;
    }
});
