function waitNMils(w) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, w);
    });
}

function rand(x, y) {
    x = x || 400;
    y = y || 300;
    return Math.floor(Math.random() * Math.floor(x)) + y;
}

// $(()=>{
//     $("#loading").hide(100)
//     $("#screen").show(100)
// })

go = function () {
    $("#loading").hide(100)
    $("#screen").show(100)
}

$(async () => {
    services = ["selflearning", "agility", "devop"];
    sockets = ["network"];
    mount = ["knowledge", "skills"];

    for (var s of services) {
        await waitNMils(rand());
        $("#loading").append(`<div class="line"><span><span class="dots">::</span> Loading ${s}.service</span></div>`);
        $("#loading .line:last").append("<span class='end'>&nbsp&nbsp</span>")
        await waitNMils(rand());
        $("#loading .line:last .end").text("OK")
    }

    for (var s of mount) {
        await waitNMils(rand());
        $("#loading").append(`<div class="line"><span><span class="dots">::</span> Loading ${s}.mount</span></div>`);
        $("#loading .line:last").append("<span class='end'>&nbsp&nbsp</span>")
        await waitNMils(rand());
        $("#loading .line:last .end").text("OK")
    }

    for (var s of sockets) {
        await waitNMils(rand());
        $("#loading").append(`<div class="line"><span><span class="dots">::</span> Reached ${s}.socket</span></div>`);
        $("#loading .line:last").append("<span class='end'>&nbsp&nbsp</span>")
        await waitNMils(rand());
        $("#loading .line:last .end").text("OK")
    }

    $("#loading").append(`<div class="line">&nbsp</div>`);
    $("#loading").append(`<div class="line"><span>Ready to start EnzOs v1.2...</span></div>`);
    await waitNMils(rand(3000, 1000));
    $("#loading").append(`<div class="line">Go !</div>`);
    await waitNMils(rand(100, 100));

    $("#loading").hide(100)
    $("#screen").show(100)
})
