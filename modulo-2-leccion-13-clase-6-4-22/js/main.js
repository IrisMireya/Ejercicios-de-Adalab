'use strict';
const p = document.querySelector('.js-p');
const section = document.querySelector('.js-section');
const img = document.querySelector ('.js-img');

const textP = document.createTextNode('Bienvenidas a JS');
p.appendChild(textP);

const article = document.createElement('article');
section.appendChild(article);

const textArticle = document.createTextNode('Texto del article');
article.appendChild(textArticle);

const pArticle = document.createElement('p');
const textParticle = document.createTextNode('Parrafo del articulonuevo');
pArticle.appendChild(textParticle);
article.appendChild(pArticle);

//añadir clases
article.classList.add('color');

//añadir atributos
article.setAttribute('id', 'articleProduct');

img.setAttribute('src', 'https://ruta');
img.src = "https://ruta";

console.log(article.getAttribute ('id'));

const listAdalabers = ['sara', 'rocio', 'lucía', 'elena'];
const ul = document.querySelector ('.js-list');

for (const item of listAdalabers){
  const li =document.createElement('li');
  ul.appendChild(li);

  const textLi = document.createTextNode (item);
  li.appendChild(textLi);

  li.dataset.dni = item;
  li.dataset.age = 22;

  li.addEventListener('click', handleClick);
}

function handleClick(event){
  console.log(event.currentTarget);
  console.log(event.currentTarget.dataset.dni);
}

