function mini_slider(num) {

    this.number = num;

    if ($('.slider_nav').children().length > 5) {
        $('.slider_nav').slick({
            slidesToShow: this.number,
            slidesToScroll: 1,
            asNavFor: '.slider_top',
            dots: false,
            nextArrow: '<button class="slide_next"></button>',
            prevArrow: '<button class="slide_prev"></button>'
        });


    } else {
        $('.slider_nav').slick({
            slidesToShow: this.number,
            slidesToScroll: 1,
            asNavFor: '.slider_top',
            dots: false,
            arrows: false
        });
    }
}
        
$(document).ready(function () {

    $('.slider_top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider_nav'
    });
    
    new mini_slider(2);

    $('.slider_nav .slick-slide').bind('click', function () {
        var slider = $('.slider_nav');
        var actIndex = $(this).attr('data-slick-index');
        slider[0].slick.slickGoTo(parseInt(actIndex));
    });


    $('.slider_top span').bind('click', function () {
        event.stopPropagation();
        $('.slider_top').addClass('hide_block');
        $('.slider_nav').slick('unslick');
       new mini_slider(1);
    });

    $('.slider_top').bind('click', function () {
        $('.slider_top').removeClass('hide_block');
        $('.slider_nav').slick('unslick');
       new mini_slider(2);
    });


     $('.min_pic').bind('hover', function () {
         
     });
});
