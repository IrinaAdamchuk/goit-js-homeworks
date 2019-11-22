"use strict";

let input;
let total = 0;

while (true) {
  input = prompt("Введите любое число");

  if (input === null) {
    break;
  }
  input = Number(input);
  let isNaN = Number.isNaN(input);
  if (isNaN) {
    console.log("Было введено не число, попробуйте еще раз");
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  total += input;
}

console.log(total);
alert(`Общая сумма чисел равна ${total}`);
