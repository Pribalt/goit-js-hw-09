import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onClickBtnSubmit);

function onClickBtnSubmit(e) {
  e.preventDefault();

  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = e.currentTarget;
  promiseCycle(Number(delay), Number(step), Number(amount));
}

function promiseCycle(delay, step, amount) {
  for (let i = 0; i < amount; i += 1) {
    const positionCycle = i + 1;
    const delayCycle = delay + step * i;
    createPromise(positionCycle, delayCycle);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  return promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
