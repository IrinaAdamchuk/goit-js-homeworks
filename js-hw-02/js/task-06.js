"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите любое число");
  const inputInNumb = Number(input);
  console.log(inputInNumb);
  const isNaN = Number.isNaN(inputInNumb);

  if (isNaN) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(inputInNumb);
}

numbers.pop();

for (const number of numbers) {
  total += number;
}

console.log(numbers);
alert(`Общая сумма чисел равна ${total}`);
