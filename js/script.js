/**
 * Created by Sofia on 18.06.2015.
 */

$(function() {
    $('a[href^="#"]').click(function (e) {
        var target = $(this).attr('href');
        //Сохраняем значение атрибута href в переменной:
        if (target !== "#") {
            $('html, body').animate(
                {scrollTop: $(target).offset().top}, 2800, 'easeInOutExpo'
            );
            return false;
        }
    });

    $(window).bind('scroll', function(e){
        var scrollTop = $(window).scrollTop();
        $('.back').css('top', (scrollTop * 0.3) + 'px');
    });
});