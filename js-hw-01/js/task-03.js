"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
const passwordRequest = "Введите пароль";
let userEntry = prompt(passwordRequest);
let message;
if (userEntry === null) {
  message = "Отменено пользователем!";
} else if (userEntry === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);
alert(message);
