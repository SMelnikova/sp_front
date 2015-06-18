/**
 * Created by Sofia on 18.06.2015.
 */
$(function() {
    $('a[href^="#"]').click(function (e) {
        var target = $(this).attr('href');
        //Сохраняем значение атрибута href в переменной:
        if (target !== "#") {
            $('html, body').animate(
                {scrollTop: $(target).offset().top}, 2000, 'easeInOutExpo'
            );
            return false;
        }
    });
});