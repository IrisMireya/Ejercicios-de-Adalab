"use strict";

const listElement = document.querySelector (".js-list");

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const perretas= document.querySelector('.js-perretas');

perretas.innerHTML=`<li><p>${firstDogName}</p><img src=${firstDogImage}></li><li><p>${secondDogName}</p><img src=${secondDogImage}></li><li><p>${secondDogName}</p><img src=${thirdDogImage}></li>`;

//listElement.innerHTML = `<li><p>${firstDogName}</p><img src=${firstDogImage}></li><li><p>${secondDogName}</p><img src=${secondDogImage}></li><li><p>${secondDogName}</p><img src=${thirdDogImage}></li>`;