'use strict';

const categories = document.querySelector('#categories');
const listOfAllCategories = categories.querySelectorAll('.item');
const calcAllCategories = listOfAllCategories.length;
console.log(`В списке ${calcAllCategories} категории`);

const arrOfAllCategories = [...listOfAllCategories];

const calcItemsInСategory = arrOfAllCategories.map(item => {
  return console.log(
    `Категория: ${
      item.querySelector('h2').textContent
    }\nКоличество элементов: ${item.querySelectorAll('li').length}`
  );
});
