function openfolder(){
    console.log(this)
    folders = {technos: ["JavaScript", "NodeJs", "Java_10", "Docker",
    "Kotlin", "Android", "Python3", "*Nix", "Elastic", "cpp", "PostgreSQL"]}

    var fold = $(this).attr('class').split(/\s+/)[1];


    $('.opened').append(`<div class="window f_${fold} last"><div class="top"></div><div class="content"></div></div>`)
    for(x of folders[fold]){
        ext = ['png', 'jpeg', 'jpg', 'bmp'][Math.floor(Math.random()*4)]
        $('.opened .window.last .content').append(`<div style="left: 0px; top: 0px;background-image: url('/res/${x}.png');"  draggable="true" class="file contained ${x}">${x}.png</div>`);
    }

    $('.opened .window.last .content div').draggable({
        containment: ".content"
    })

    $('.opened .window').draggable({
        containment: '#screen'
    }).resizable()

}

$(() => {
    $(".file[href]").on('dblclick', function () {
        console.log("AFILE")
        var win = window.open($(this).attr("href"), '_blank');
        win.focus();
    });

    $(".file:not([href])").on('dblclick', function () {
        console.log(`opened ${$(this).text()}`)
    });

    $(".folder").on('dblclick', function(){
        openfolder.bind(this)();
    })
})

