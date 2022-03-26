setInterval(()=>{
    const time = document.querySelector("#timeMtl");

    let date = new Date();

    let hours = date.getHours() - 2;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

setInterval(()=>{
    const time = document.querySelector("#timeSp");

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

setInterval(()=>{
    const time = document.querySelector("#timeLondon");

    let date = new Date();

    let hours = date.getHours() + 3;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

setInterval(()=>{
    const time = document.querySelector("#timeKiev");

    let date = new Date();

    let hours = date.getHours() + 5;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

setInterval(()=>{
    const time = document.querySelector("#timeTokyo");

    let date = new Date();

    let hours = date.getHours() + 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});

setInterval(()=>{
    const time = document.querySelector("#timeSydney");

    let date = new Date();

    let hours = date.getHours() + 14;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

    if (hours > 12){
        hours = hours - 12;
        day_night = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});