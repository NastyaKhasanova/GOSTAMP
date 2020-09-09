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

    //oneHeightElements($('.product__card-title'));
    //oneHeightElements($('.product__card-line'));

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
        $(this).toggleClass("open");
    });

    var userBtn = $('.header__top .user-btn').clone();
    var catalogMenuClone = $('.header__bottom .catalog-menu').clone();
    var mainMenuClone = $('.header__top .main-menu').clone();
    var headerContacts = $('.header__top .header__contacts').clone();
    
    $('.mobile-menu').append(userBtn);
    $('.mobile-menu').append(catalogMenuClone);
    $('.mobile-menu').append(mainMenuClone);
    $('.mobile-menu').append(headerContacts);

    $('.search-btn').click(function(){
        $('.header__search').slideToggle();
        $('body').toggleClass("search-open");
    });

    $("body").click(function (e) {
        if (!$(e.target).is($(".header__search")) && !$(".header__search").has(e.target).length && $("body").hasClass("search-open") && !$(e.target).is($(".search-btn")) && !$(".search-btn").has(e.target).length) {
            $("body").removeClass("search-open");
            $('.header__search').slideToggle();
        }

        if (!$(e.target).is($(".mobile-menu")) && !$(".mobile-menu").has(e.target).length && $("body").hasClass("burger-open") && !$(e.target).is($(".burger")) && !$(".burger").has(e.target).length) {
            $("body").removeClass("burger-open");
            $('.burger').removeClass('open');
        }
    });

    /* tabs */
    $('.tabs__nav').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
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
        lazy: true,
    });
    
    var topBannerSwiper = new Swiper('.top-banner__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
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
        lazy: true,
        breakpoints: {
            525: {
                spaceBetween: 20,
            },
        }    
    });

    let productsSliders = document.querySelectorAll('.products__slider');
    
    productsSliders.forEach((slider) => {
        var productsSliderSwiper = new Swiper(slider, {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
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
            lazy: true,
            breakpoints: {
                720: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                645: {
                    spaceBetween: 20,
                },
                280: {
                    spaceBetween: 10,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }   
        });
    });

    let productCardSliders = document.querySelectorAll('.product__card-slider');

    productCardSliders.forEach((slider) => {
        var productCardSliderSwiper = new Swiper(slider, {
            spaceBetween: 10,
            slidesPerView: 1,
            lazy: true,
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
            }
        });

        (Array.from(slider.querySelectorAll('.swiper-pagination-bullet'))).forEach(paginationBullet=>{
            paginationBullet.addEventListener('mouseenter', function () {
                var productImgID = $(this).index();
                productCardSliderSwiper.slideTo(productImgID);
            })
        })

    });

    $('.product__card-slider').each(function(){
        var linkProduct = $(this).find('.swiper-slide a').attr('href');
        $(this).find('.swiper-pagination-bullet').on('click', function (event) {
            window.location.href = linkProduct;
        });
    });



    var sliderClone = $('.product-inner__top--slider').clone();

    $('.slider-popup').append(sliderClone);

    let productGallerys = document.querySelectorAll('.product-inner__top--slider');

    productGallerys.forEach((slider) => {
        var productGalleryThumbs = new Swiper(slider.querySelector('.product-inner__thumbs'), {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var productGalleryTop = new Swiper(slider.querySelector('.product-inner__gallery'), {
            spaceBetween: 10,
            thumbs: {
                swiper: productGalleryThumbs
            }
        });

    });


    /* mobile-slider */
    var instructionsSwiper;
    var setsSwiper;

    $(window).on('load resize', function(){
        if ($(window).width() <= 640) {
            /* sets */
            if (!$('.sets').length) {
                $('.sets__list').wrap('<div class="sets"/>');
                $('.sets').append('<div class="swiper-pagination"></div>');
                $('.sets').append('<div class="swiper-button-next"></div>');
                $('.sets').append('<div class="swiper-button-prev"></div>');

                setsSwiper = new Swiper('.sets', {
                    slideClass: 'sets__list-item',
                    wrapperClass: 'sets__list',
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    navigation: {
                        nextEl: '.sets .swiper-button-next',
                        prevEl: '.sets .swiper-button-prev',
                    },
                    pagination: {
                        el: '.sets .swiper-pagination',
                        type: 'progressbar',
                    },
                    lazy: true,
                });
            } 
            
            /* instructions */
            if (!$('.instructions').length) {
                $('.instruction__list').wrap('<div class="instructions"/>');
                $('.instructions').after($('.instruction-block__btn'));
                $('.instructions').append('<div class="swiper-pagination"></div>');
                $('.instructions').append('<div class="swiper-button-next"></div>');
                $('.instructions').append('<div class="swiper-button-prev"></div>');

                instructionsSwiper = new Swiper('.instructions', {
                    slideClass: 'instruction__list-item',
                    wrapperClass: 'instruction__list',
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    navigation: {
                        nextEl: '.instructions .swiper-button-next',
                        prevEl: '.instructions .swiper-button-prev',
                    },
                    pagination: {
                        el: '.instructions .swiper-pagination',
                        type: 'progressbar',
                    },
                    lazy: true,
                });
            } 
            
        } else if ($(window).width() > 640) {
            if ($('.sets').length > 0) {
                $('.sets .swiper-pagination').remove();
                $('.sets .swiper-button-next').remove();
                $('.sets .swiper-button-prev').remove();
                setsSwiper.destroy();
                $('.sets__list').unwrap($('.sets'));
            }
            
            $('.instruction-block__text').after($('.instruction-block__btn'));
            if ($('.instructions').length > 0) {
                $('.instructions swiper-pagination').remove();
                $('.instructions .swiper-button-next').remove();
                $('.instructions .swiper-button-prev').remove();
                instructionsSwiper.destroy();
                $('.instruction__list').unwrap($('.instructions'));
            }
            
        }

        if ($(window).width() <= 960) {
            $('.product-inner__cart-line').append($('.product-inner__top--text .add-fav'));

            // read-more
            $('.product-inner__tabs .tabs__content .text-page').each(function () {
                var toggleContent = $(this);
                if (toggleContent.height() > 80) {
                    toggleContent.addClass('hide');
                    toggleContent.after('<div class="content_toggle">Читать</div>');
                }
                $('.content_toggle').click(function () {
                    if (toggleContent.hasClass('hide')) {
                        $('.content_toggle').html('Читать');
                        toggleContent.removeClass('hide');
                    } else {
                        $('.content_toggle').html('Скрыть');
                        toggleContent.addClass('hide');
                    }
                    return false;
                });
            });

        }

        let headerHeight = $('.header').innerHeight();

        $('.block-404').css('min-height', function () {
            return $(window).height() - headerHeight + 20 + 'px';
        });


    });

    /* form-control */
    $(".form__control").focus(function () {
        $(this).parent(".form__item").each(function () {
            $(this).addClass('form-value');
        });
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).parent(".form__item").each(function () {
                $(this).removeClass('form-value');
            });
        }
    });
    

});