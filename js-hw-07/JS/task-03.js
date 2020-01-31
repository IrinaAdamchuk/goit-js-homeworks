'use strict';
import { images } from './images.js';

const gallery = document.querySelector('#gallery');

const markup = createMarkupOfList(images);
gallery.insertAdjacentHTML('beforeend', markup);

function createMarkupOfList(listOfImages) {
  return listOfImages.map(image => createItemOfList(image)).join('');
}

function createItemOfList({ url, alt }) {
  const itemOfList = `<li><img src=${url} alt="${alt}"></li>`;
  return itemOfList;
}
