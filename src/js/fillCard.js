import { INFO } from './constants.js';

const card = document.getElementById('card');

const objectsInfo = Object.keys(INFO);

let counter = 0;

const printCard = () => {
  card.children[0].textContent = INFO[objectsInfo[counter]].title;
  card.children[1].textContent = INFO[objectsInfo[counter]].description;
};

export const nextCard = () => {
  if (counter >= objectsInfo.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  printCard();
};

export const prevCard = () => {
  counter === 0 ? (counter = objectsInfo.length - 1) : counter--;
  printCard();
};

printCard();
