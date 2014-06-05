var sizes = [320, 480, 600, 800, 1200, 1600, 2800];

$(function () {
    var l = sizes.length;   
    for (var i = 0; i < l; i++) {
        $('<div />', {
            text: 'px',
            css: {'left': sizes[i]},
            text: sizes[i] + 'px'
        }).appendTo('#breakpoints');
    }

    $(".row div").each(function() {
        $(this).css("background-color", getRandomColor());
        $(this).append($(this).attr('class'));
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}