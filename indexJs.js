

$(function(){
    // loadCourses();
    // loadStandings();
    // currentTheadCourse();
    $('.targetDiv').hide();
    $('#div1').show();

    $('.showSection').click(function(){
           $('.targetDiv').slideUp( 1500 );
           $('#div'+$(this).attr('target')).delay( 1000 ).slideDown( 1500 );
           $( "#icon" ).hide();
           $( "#topnav" ).hide();

           console.log("hello from before this ");
           $('html, body').animate({
             scrollTop: 0
           }, 0);
    });



   // declare variable
   var scrollTop = $(".scrollTop");

   $(window).scroll(function() {
     // declare variable
     var topPos = $(this).scrollTop();

     // if user scrolls down - show scroll to top button
     if (topPos > 100) {
       $(scrollTop).css("opacity", "1");

     } else {
       $(scrollTop).css("opacity", "0");
     }

   }); // scroll END

   //Click event to scroll to top
   $(scrollTop).click(function() {
     $('html, body').animate({
       scrollTop: 0
    }, 100);
     return false;

   });

 })
