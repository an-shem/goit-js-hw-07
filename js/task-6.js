const inputRef = document.querySelector('#validation-input');

const onFocusBlur = e => {
  if (e.target.value.length >= e.target.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
  if (e.target.value.length < e.target.dataset.length) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
  if (!e.target.value) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', onFocusBlur);
