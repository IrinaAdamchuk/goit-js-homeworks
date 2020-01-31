'use strict';

const input = document.querySelector('#validation-input');
const length = Number(input.dataset.length);

input.addEventListener('blur', hendleBlur);
input.addEventListener('input', hendleInput);

function hendleBlur(event) {
  const blurValidation =
    event.currentTarget.value.length !== length
      ? input.classList.add('invalid')
      : input.classList.remove('invalid');
  input.classList.add('valid');
  return blurValidation;
}

function hendleInput(event) {
  const inputValidation =
    event.currentTarget.value.length < length ||
    event.currentTarget.value.length > length
      ? input.classList.add('invalid')
      : input.classList.remove('invalid');
  input.classList.add('valid');
  return inputValidation;
}
