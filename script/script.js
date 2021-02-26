$(function () {
    //   page scroll on primary menu  click 
    $('.primary-menu  ul li a span').click(function () {
        get_scroll_id = $(this).attr('data-scroll');
        if (get_scroll_id == "#customer-aquisition") {
            $('.primary-menu').removeClass('active');
            $("html, body").animate({
                scrollTop: $(get_scroll_id).offset().top - 140
            }, 600);
        }
        else {
            $('.primary-menu').removeClass('active');

            $("html, body").animate({
                scrollTop: $(get_scroll_id).offset().top - 60
            }, 600);
        }

    });

    if (window.location.hash) {
        scroll(0, 0);
        setTimeout(function () {
            scroll(0, 0);
        }, 1);
    }
    if (window.location.hash) {
        $("html, body").animate({
            scrollTop: $(window.location.hash).offset().top - 140
        }, 600);
    }

    // contact scroll
    $('.header-action .btn-secondary').click(function () {
        $("html, body").animate({
            scrollTop: $('#contact-home').offset().top - 75
        }, 600);
    });


    // back to top button  and header fixing

    // show/hide nav  header on page load
    showBackToTop();
    fixedHeader();

    $(window).scroll(function () {
        // show/hide back to top button on scroll
        showBackToTop();

        // show/hide header on scroll
        fixedHeader();
    });

    function showBackToTop() {

        if ($(window).scrollTop() > 500) {

            // Show fixed nav
            $(".back-to-top").fadeIn(300)
        } else {
            // Hide white nav
            $(".back-to-top").fadeOut(300)
        }
    }

    function fixedHeader() {

        if ($(window).scrollTop() > 100) {

            // Show fixed nav
            $("header").addClass('fixed-header');
        } else {
            // Hide white nav
            $("header").removeClass('fixed-header');
        }
    }

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    // Mobile Menu functionality

    $('.menu-open').click(function () {
        $('.primary-menu ').addClass('active');
    });

    $('.menu-close').click(function () {
        $('.primary-menu ').removeClass('active');
    });





    // cookies popup======================

    //check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
    if (getCookie('popupCookie') != 'submited') {
        if (getCookie('popupCookie') != 'closed') {
            $('.cookies-section').css("display", "block").hide().fadeIn();
        }
    }

    $('#decline-cookies').click(function () {
        $('.cookies-section').fadeOut();
        //sets the coookie to one minute if the popup is closed (whole numbers = days)
        setCookie('popupCookie', 'closed', .00069444444);
    });

    $('#accept-cookies').click(function () {
        $('.cookies-section').fadeOut();
        //sets the coookie to five minutes if the popup is submited (whole numbers = days)
        setCookie('popupCookie', 'submited', .0034722222);
    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }



    // // moving text effect banner===============
    $('.banner-mobile-content h3').width($('.banner-mobile-content h3 span:first-child').width());


    // video popup

    var video_url=$('#how-it-works video source').attr('src');
  
    $('#btn-work').click(function () {
        $('#how-it-works').show();
        $('#how-it-works video').attr('src', video_url);
        $('#how-it-works video').trigger('play');
    });
    $('.btn-close-how-works').click(function () {
        $('#how-it-works').hide();
        $('#how-it-works video').currentTime = 0;
        $('#how-it-works video').trigger('pause');
        $('#how-it-works video').attr('src', '');
    });

    // FAQ===============
    $('.faq-question').click(function () {
        $('.faq-question').removeClass('active');
        $('.faq-answer').slideUp(200);

        $(this).addClass('active');
        $(this).next('.faq-answer').slideDown(200);
    });
    //page animations

    AOS.init({
        delay: 200,
        duration: 800,
        once: true
    });
});

