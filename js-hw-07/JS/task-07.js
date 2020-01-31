'use strict';

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.setAttribute('min', '50');

input.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  span.style.fontSize = `${Number(event.currentTarget.value) - 50 + 16}px`;
}
