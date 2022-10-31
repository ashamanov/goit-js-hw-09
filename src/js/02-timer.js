import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let chosenDate = 0;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
    chosenDate = selectedDates[0];
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

flatpickr(input, options);

startBtn.addEventListener('click', timerStart);

function timerStart() {
  const timerId = setInterval(() => {
    const timer = convertMs(chosenDate - new Date());
    days.textContent = addLeadingZero(timer.days);
    hours.textContent = addLeadingZero(timer.hours);
    minutes.textContent = addLeadingZero(timer.minutes);
    seconds.textContent = addLeadingZero(timer.seconds);

    if (getObj() === 0) {
      clearInterval(timerId);
    }
    return;
  }, 1000);
}

function getObj() {
  const timeObj = convertMs(chosenDate - new Date());
  const dayMs = timeObj.days * 24 * 60 * 60 * 1000;
  const hourMs = timeObj.hours * 60 * 60 * 1000;
  const minutesMs = timeObj.minutes * 60 * 1000;
  const secondsMs = timeObj.seconds * 1000;
  const timeMs = dayMs + hourMs + minutesMs + secondsMs;

  return timeMs;
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
