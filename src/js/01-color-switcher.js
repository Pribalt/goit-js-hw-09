const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.body;
const BACKGROUND_COLOR_DELAY = 1000;
let intervalId = null;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  disabledStart(true);
  disabledStop(false);

  intervalId = setInterval(() => {
    const randomHexColor = getRandomHexColor();

    bodyEl.style.backgroundColor = randomHexColor;
  }, BACKGROUND_COLOR_DELAY);
}

function onBtnStopClick() {
  disabledStop(true);
  disabledStart(false);

  clearInterval(intervalId);
}

function disabledStart(params) {
  btnStartEl.disabled = params;
}

function disabledStop(params) {
  btnStopEl.disabled = params;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
