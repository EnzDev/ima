function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

$(() => {
    $(".file, .folder").click(function (e) {
        console.log("show")
        selectElementContents(this)
        e.cancelBubble = true; // Keep for compat
        e.stopPropagation();
    })

    $('body').click(function (e) {
        console.log("hide")
        selectElementContents($("#nope")[0])
    });

    $('.file, .folder').draggable({
        start: function () {
            selectElementContents(this);
        },
        stop: function (event, ui) {
            var startPosition = ui.position;
            $(ui.helper).css({
                'left': (Math.round(startPosition.left / 25) * 25) + 'px',
                'top': (Math.round(startPosition.top / 25) * 25) + 'px'
            });
        }
    })
})