"use strict";

let input = prompt("Введите любое число");
const numbers = [];
let total = 0;

if (input !== null) {
  numbers[0] = Number(input);

  while (input !== null) {
    input = prompt("Введите любое число");
    const inputInNumb = Number(input);
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
  console.log(`Общая сумма чисел равна ${total}`);
  alert(`Общая сумма чисел равна ${total}`);
} else {
  alert("Отменено пользователем");
}
