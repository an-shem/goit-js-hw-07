const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const handleInput = e =>
  (spanRef.textContent = e.target.value ? e.target.value : 'незнакомец');

inputRef.addEventListener('input', handleInput);
