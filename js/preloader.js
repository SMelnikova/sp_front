/**
 * Created by Sofia on 21.06.2015.
 */
$(window).on('load', function () {
    var $preloader = $('#loader-wrapper');
        $text   = $preloader.find('.spinner');
        $spinner = $preloader.find('#loader');
    $text.delay(550).fadeOut();
    $spinner.delay(600).fadeOut();
    $preloader.delay(750).fadeOut('slow');
});