const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');

const christmas = '25 Dec 2020';

function countdown() {
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const totalSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElem.innerHTML = days;
    hoursElem.innerHTML = formatTime(hours);
    minutesElem.innerHTML = formatTime(minutes);
    secondsElem.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call

countdown();
setInterval(countdown, 1000);

