import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const dataDaysEl = document.querySelector('span[data-days]');
const dataHoursEl = document.querySelector('span[data-hours]');
const dataMinutesEl = document.querySelector('span[data-minutes]');
const dataSecondsEl = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentTime = new Date();
    const selectedTime = selectedDates[0];
    const deltaDate = selectedTime - currentTime;

    if (deltaDate < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    btnStartEl.disabled = false;
  },
};
const fp = flatpickr(inputEl, options);

const BACKGROUND_COLOR_DELAY = 1000;
let intervalId = null;

btnStartEl.disabled = true;

btnStartEl.addEventListener('click', onBtnStartClick);

function onBtnStartClick(e) {
  const intervalId = setInterval(() => {
    const currentTime = new Date();
    const selectedTime = fp.selectedDates[0];
    const deltaTime = selectedTime - currentTime;

    btnStartEl.disabled = true;

    if (deltaTime < 0) {
      clearInterval(intervalId);
      return;
    }
    updateClockFace(convertMs(deltaTime));
  }, BACKGROUND_COLOR_DELAY);
}

function updateClockFace({ days, hours, minutes, seconds }) {
  dataDaysEl.textContent = addLeadingZero(days);
  dataHoursEl.textContent = addLeadingZero(hours);
  dataMinutesEl.textContent = addLeadingZero(minutes);
  dataSecondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
