'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы'
];

const listOfIngredients = document.querySelector('#ingredients');

const createListOfIngredients = ingredients.map(ingredient => {
  const itemOfList = document.createElement('li');
  itemOfList.textContent = `${ingredient}`;
  return itemOfList;
});

listOfIngredients.append(...createListOfIngredients);
