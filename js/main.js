$(function(){
    $('.banner .image-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    });
    $('.hamburger').click(function(){
        $(this).toggleClass('navactive');
        $('.navlinks').slideToggle();
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    $('.day').countdown('2021/09/03', function(event) {
        $('.days').html(event.strftime('%d'));
        $('.hours').html(event.strftime('%H'));
        $('.minutes').html(event.strftime('%M'));
        $('.seconds').html(event.strftime('%S'));
      });


    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });

});