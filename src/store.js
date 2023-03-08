let future = new Date().setDate(new Date().getDate() + 30);

const timer = setInterval(() => {
    let now = new Date().getTime();
    let time = future - now;

    let day = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    // console.log(day, hours, minutes, seconds);

    if (time === 0) {
        clearInterval(timer);
    }
}, 1000);
