"use strict";

const total = 100;
const ordered = 50;
let message;
if (ordered > total) {
  message = "На складе не достаточно товаров!";
} else {
  message = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(message);
alert(message);
