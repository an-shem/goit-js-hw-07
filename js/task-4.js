let counterValue = 0;

const spanRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector(
  '#counter button[data-action="increment"]',
);
const btnDecrementRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

const increment = () => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};

btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);
