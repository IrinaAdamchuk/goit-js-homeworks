"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const promptLabel = "Сколько дроидов вы хотит купить? Укажите количество";
let userChoice = prompt(promptLabel);
let message;
if (userChoice === null) {
  message = "Отменено пользователем!";
} else {
  let totalPrice = Number(userChoice) * pricePerDroid;
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    const balance = credits - totalPrice;
    message = `Вы купили ${userChoice} дроидов, на счету осталось ${balance} кредитов.`;
  }
}
console.log(message);
alert(message);
