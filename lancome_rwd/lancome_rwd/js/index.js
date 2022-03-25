$(function() {
    $('.hover').css({
        display: 'none'
    });

    $('.box1,.box2').hover(function() {
        $(this).find('.hover').css({
            display: 'block'
        });

    }, function() {
        $(this).find('.hover').css({
            display: 'none'
        });

    });
})
