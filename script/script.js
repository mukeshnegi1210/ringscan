$(function () {
    //   page scroll on primary menu  click 
    $('.primary-menu  ul li a').click(function () {
        get_scroll_id = $(this).attr('data-scroll');
        if (get_scroll_id == "#customer-aquisition") {
            $("html, body").animate({
                scrollTop: $(get_scroll_id).offset().top - 140
            }, 600);
        }
        else {
            $("html, body").animate({
                scrollTop: $(get_scroll_id).offset().top - 75
            }, 600);
        }

    });

    // contact scroll
    $('.header-action .btn-secondary ,.banner-content .btn-secondary').click(function () {
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




    //page animations

    AOS.init({
        delay: 200,
        duration: 800,
        once: true
    });
});