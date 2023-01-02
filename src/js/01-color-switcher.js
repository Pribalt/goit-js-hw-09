const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.body;
const BACKGROUND_COLOR_DELAY = 1000;
let intervalId = null;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  intervalId = setInterval(() => {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;

    const randomHexColor = getRandomHexColor();

    bodyEl.style.backgroundColor = randomHexColor;
  }, BACKGROUND_COLOR_DELAY);
}

function onBtnStopClick() {
  btnStopEl.disabled = true;
  btnStartEl.disabled = false;

  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
