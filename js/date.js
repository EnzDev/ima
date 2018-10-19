$(() => {
    $('.datetime').text(new Date().toLocaleDateString("en-US", {
        hour:'numeric',
        minute:'numeric',
        weekday: 'long',
        day: 'numeric',
        year:'numeric',
        hour12:false
    }));
    setInterval(() => {
        $('.datetime').text(new Date().toLocaleDateString("en-US", {
            hour:'numeric',
            minute:'numeric',
            weekday: 'long',
            day: 'numeric',
            year:'numeric',
            hour12:false
        }))
    }, 10000)
})