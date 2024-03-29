$(document).ready(function() {

    // $("body").niceScroll({
    //     cursorcolor:"#ff9b51",
    //     cursorwidth:"6px",
    //     cursorborder:'1px solid #ac2214'
    // });


    // header
    $('body').css("padding-top",$('.header .navbar').innerHeight());
    $(window).scroll(function() {
        $(this).scrollTop() >= 600 ? $('.header .navbar.navbar-inverse.navbar-fixed-top').css('opacity','0.75') : $('.header .navbar.navbar-inverse.navbar-fixed-top').css('opacity','1');
    });

        // Navigation Links
        for(let i =1; i<6; i++) {
            $('.header nav .collapse ul > li a').eq(i).on('click', function() {
                $('html').animate({
                    scrollTop: $($(this).data('section')).offset().top - parseInt($($(this).data('section')).css('padding-top'))
                },1000);
                $(this).parent().addClass('active').siblings().removeClass('active');
            });
        }

    // Inputs placeholder
    var placeholder;
    $('[placeholder]').on({
        focus:function() {
            placeholder = $(this).attr('placeholder');
            $(this).attr('placeholder', '');
        },
        blur:function() {
            $(this).attr('placeholder', placeholder);
        }
    });

    // Footer
        // To Top button
        $('.footer .go-up').on('click', function() {
            $('html, body').animate({
                scrollTop:0
            },1500);
        });

});

    //loading
    $(window).on('load', function() {
        $('.loading').fadeOut(500, function() {
            $(this).remove();
        });
    })