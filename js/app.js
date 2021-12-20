$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        up = $('.to__up');

/* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        }else {
            header.removeClass("fixed");
        }

/* ToUp */
        if($(window).scrollTop() > 200) {
           up.addClass('show');
       } else {
           up.removeClass('show');
       }

    }

/* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).scrollTop();

        $("html, body").animate({
           scrollTop: blockOffset
        }, 500);
    });

 /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
       event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });


});
