var bands = $("._band"),
    index = 0,
    at = 500;

$(document).keydown(function(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        if (index <= 0)
            return;

        index--;
        $('html, body').animate({
            scrollTop: $(bands[index]).offset().top
        }, at);

    } else if (e.keyCode == '40') {
        // down arrow
        if (index >= bands.length - 1)
            return;

        index++;
        $('html, body').animate({
            scrollTop: $(bands[index]).offset().top
        }, at);

    } else if (e.keyCode == '37') {
        // left arrow
        if (index <= 0)
            return;

        index--;
        $('html, body').animate({
            scrollTop: $(bands[index]).offset().top
        }, at);
    } else if (e.keyCode == '39') {
        // right arrow
        if (index >= bands.length - 1)
            return;

        index++;
        $('html, body').animate({
            scrollTop: $(bands[index]).offset().top
        }, at);
    }
});
