"use strict";

console.log('hooli');

const nameInput = document.querySelector('.js_name');
const lastnameInput = document.querySelector('.js_lastname');
const sayHibutton = document.querySelector('.js_button');
const saludoParagraph = document.querySelector('.js_saludo');
/*
1. se va a lanzar cuando haga click en saludar
2. Coger el nombre y apellido de la usuaria
3. juntar el nombre y el apellido
4. mostrar un mensajito con el saludo.*/

function handleclick() {
console.log("hooli");

const name = nameInput.value;
const lastName = lastnameInput.value;

saludoParagraph.innerHTML = `Hola ${name} ${lastName}`;
}

sayHibutton.addEventListener( 'click' , handleclick );