/**
 * Created by Sofia on 18.06.2015.
 */

$(function() {
    var area1 = $('#position1').offset().top,
        area2 = $('#position2').offset().top,
        area3 = $('#position3').offset().top,
        area4 = $('#position4').offset().top;

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

    //отлавливает клик по li и заставляет работать внутреннюю ссылку
    $(".nav li").on( "click", function( event ) {
        event.preventDefault();
        $(this).find('a').click();
    });

    $(window).bind('scroll', function(e){
        var scrollTop = $(window).scrollTop();
        $('.back').css('top', (scrollTop * 0.3) + 'px');
    });

    $(window).bind('scroll', startAutoScroll);
    $(window).resize(startAutoScroll);
    autoScroll();

    //а теперь пишем scroll auto
    var timer; //timer для подскроллирования
    var manualScroll = true; //флаг, чтобы не зациклить скролл. true - значит крутил пользователь, false - значит подкручивал autoscroll

    function startAutoScroll(e){
        if (!manualScroll){
            return;
        }
        clearTimeout(timer);
        timer = setTimeout(autoScroll, 500);
    }

    function manualScrollTrue(){
        manualScroll = true;
    }

    function autoScroll(){
        manualScroll = false;
        setTimeout(manualScrollTrue, 700);

        var scroll = $(window).scrollTop();

        var diff1 = area1 - scroll,
            diff2 = area2 - scroll,
            diff3 = area3 - scroll,
            diff4 = area4 - scroll;

        var pos1 = Math.abs(diff1);
        var pos2 = Math.abs(diff2);
        var pos3 = Math.abs(diff3);
        var pos4 = Math.abs(diff4);

        var min = Math.min(pos1, pos2, pos3, pos4);
        if (min <= 1)	return;
        if (pos1 === min)	scrollTo(area1);
        else if (pos2 === min)	scrollTo(area2);
        else if (pos3 === min)	scrollTo(area3);
        else if (pos4 === min)	scrollTo(area4);
    }

    function scrollTo(position){
        $('html, body').animate({scrollTop: position}, 2500, 'easeInOutExpo');
    }
});