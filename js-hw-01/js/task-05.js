"use strict";

const CHINA = "Китай";
const creditsInChina = 100;
const CHILE = "Чили";
const creditsInChile = 250;
const AUSTRALIA = "Австралия";
const creditsInAustralia = 170;
const INDIA = "Индия";
const creditsInIndia = 80;
const JAMAICA = "Ямайка";
const creditsInJamaica = 120;
const promptLabel = "Введите название страны, в которую нужно доставить товар";
let userInput = prompt(promptLabel);
let message;
if (userInput === null) {
  message = "Отменено пользователем";
} else
  switch (userInput.toLowerCase()) {
    case CHINA.toLowerCase():
      message = `Доставка в ${CHINA} будет стоить ${creditsInChina} кредитов`;
      break;
    case CHILE.toLowerCase():
      message = `Доставка в ${CHILE} будет стоить ${creditsInChile} кредитов`;
      break;
    case AUSTRALIA.toLowerCase():
      message = `Доставка в ${AUSTRALIA} будет стоить ${creditsInAustralia} кредитов`;
      break;
    case INDIA.toLowerCase():
      message = `Доставка в ${INDIA} будет стоить ${creditsInIndia} кредитов`;
      break;
    case JAMAICA.toLowerCase():
      message = `Доставка в ${JAMAICA} будет стоить ${creditsInJamaica} кредитов`;
      break;
    default:
      message = "В вашей стране доставка не доступна";
  }
console.log(message);
alert(message);
