// oneHeight
oneHeightElements = function (element) {
    var maxheight = 0;
    element.height('auto');
    element.each(function () {
        var height = $(this).height();
        if (height > maxheight) {
            maxheight = height;
        }
    });
    element.height(maxheight);
}

$(document).ready(function () {

    $(".fancybox").fancybox({});

    //scroll
    /* var $page = $('html, body');

    $('a[href*="#"]:not(.fancybox)').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    }); */


    // burger-menu
    $('.burger').click(function () {
        $('body').toggleClass("burger-open");
    });

    $("body").click(function (e) {
        if (!$(e.target).is($(".mobile-menu")) && !$(".mobile-menu").has(e.target).length && $("body").hasClass("burger-open") && !$(e.target).is($(".burger")) && !$(".burger").has(e.target).length) {
            $("body").removeClass("burger-open");
        }
    });

    var menuClone = $('nav .main-menu').clone();

    $('.mobile-menu').append(menuClone);

    $('.search-btn').click(function(){
        $('.header__search').slideToggle();
    });

    //sliders
    var exampelsSwiper = new Swiper('.exampels-block .swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.exampels-block .swiper-button-next',
            prevEl: '.exampels-block .swiper-button-prev'
        },
        pagination: {
            el: ".exampels-block .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            720: {
                slidesPerView: 3
            },
            960: {
                slidesPerView: 4
            }
        }
    });

    var productImgSwiper = new Swiper('.product-slider-img .swiper-container', {
        slidesPerView: 1,
        /* loop: true, */
        loopSlides: 1,
        autoplay: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    });

    var productTextSwiper = new Swiper('.product-slider-text .swiper-container', {
        slidesPerView: 1,
        /* loop: true, */
        loopSlides: 1,
        autoplay: true,
        navigation: {
            nextEl: '.product-slider-text .swiper-button-next',
            prevEl: '.product-slider-text .swiper-button-prev'
        },
        pagination: {
            el: ".product-slider-text .swiper-pagination",
            type: "bullets",
            clickable: true
        },
        thumbs: {
            swiper: productImgSwiper
        },
        on: {
            slideTo: function slideTo() { }
        }
    });

    $('.products-item').click(function () {
        var productItemID = $(this).index();
        $page.animate({
            scrollTop: $('.product-slider-block').offset().top
        }, 400);
        productTextSwiper.slideTo(productItemID);
    });

});