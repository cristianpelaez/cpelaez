$(document).ready(function (){
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll > 3) {
            $("header").addClass("header-fixed");
        }else{
            $("header").removeClass("header-fixed");
        }
    });

    $("#home").click(function (){
        $('html, body').animate({
            scrollTop: (0),
        }, 1000);
    });

    $("#services_option").click(function (){
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 1000);
    });

    $("#gallery_option").click(function (){
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 1000);
    });

    $("#contact_option").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

