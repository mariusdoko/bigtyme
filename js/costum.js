/*===========================================
                SERVICES
=============================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*===========================================
                WORK   
=============================================*/
$(document).ready(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*===========================================
                TEAM   
=============================================*/

$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*===========================================
                STATS   
=============================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

/*===========================================
                NAVIGATION   
=============================================*/

$(function () {
    $(window).scroll(function () {
        //hide the nax
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();

        } else {
            //show the nav
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();

        }
    });

});

//smooth scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});

//close menu on click

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });


});