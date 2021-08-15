const newYear = '15 Dec 2021';
const daysEl = document.getElementById('days');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const day = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formateTime(day);
    hoursEl.innerHTML = formateTime(hour);
    minutesEl.innerHTML = formateTime(minutes);
    secondsEl.innerHTML = formateTime(seconds);
    
}

function formateTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);