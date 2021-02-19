const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls > input');
const btnRenderRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const btnDestroyRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);

function createBoxes(amount) {
  const arrDiv = [];

  for (let i = 0; i < amount; i++) {
    const divRef = document.createElement('div');
    // -----------генирируем цвет -----------
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    divRef.style.backgroundColor = color;

    // ------------задаем размер------------
    const width = 30 + 10 * i;
    const height = 30 + 10 * i;

    divRef.style.width = `${width}px`;
    divRef.style.height = `${height}px`;
    // ---------------------------------------
    arrDiv.push(divRef);
  }
  inputRef.value = null;
  boxesRef.append(...arrDiv);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

btnRenderRef.addEventListener('click', () => createBoxes(inputRef.value));

btnDestroyRef.addEventListener('click', destroyBoxes);
