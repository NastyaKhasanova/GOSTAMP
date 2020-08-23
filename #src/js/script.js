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

    if ($(window).width() > 520) {
        $('.selectize').selectize();
    }

    oneHeightElements($('.product__card-title'));
    oneHeightElements($('.product__card-line'));

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
    var topBannerNavSwiper = new Swiper('.top-banner__nav', {
        spaceBetween: 20,
        direction: 'vertical',
        slidesPerView: 2,
        loopSlides: 2,
        lopp: true,
        autoplay: {
            delay: 5000,
        },
    });
    
    var topBannerSwiper = new Swiper('.top-banner__slider', {
        spaceBetween: 20,
        thumbs: {
            swiper: topBannerNavSwiper
        },
        navigation: {
            nextEl: '.top-banner__slider .swiper-button-next',
            prevEl: '.top-banner__slider .swiper-button-prev',
        },
        pagination: {
            el: '.top-banner__slider .swiper-pagination',
            type: 'progressbar',
        },
        loop: true,
        loopSlides: 2,
        autoplay: {
            delay: 5000,
        },
    });

    let productsSliders = document.querySelectorAll('.products__slider');
    
    productsSliders.forEach((slider) => {
        var productsSliderSwiper = new Swiper(slider, {
            spaceBetween: 30,
            slidesPerView: 3,
            navigation: {
                nextEl: slider.previousElementSibling.querySelector('.swiper-button-next'),
                prevEl: slider.previousElementSibling.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: slider.querySelector('.swiper-progress'),
                type: 'progressbar',
            },
            autoplay: {
                delay: 5000,
            },
        });
    });

    let productCardSliders = document.querySelectorAll('.product__card-slider');

    productCardSliders.forEach((slider) => {
        var productCardSliderSwiper = new Swiper(slider, {
            spaceBetween: 10,
            slidesPerView: 1,
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            }
        });
    });


    $('ul.product-tabs__nav').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.products-tabs__list').find('.products-tabs__pane').removeClass('active').eq($(this).index()).addClass('active');
    });


});