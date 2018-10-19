$(() => {
    $(".file[href]").on('dblclick', function () {
        console.log("click")
        var win = window.open($(this).attr("href"), '_blank');
        win.focus();
    });

    $(".file:not([href])").on('dblclick', function () {
        console.log(`opened ${$(this).text()}`)
    });
})