$(document).ready(function () {
    $('.color').mouseenter(function () {
        var idColor = $(this).attr('id');
        $('#texte').css('color', idColor);
    });
    $('.color').mouseout(function () {
        $('#texte').css('color', 'black');
    });
});
