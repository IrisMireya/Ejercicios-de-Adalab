"use strict";

const button = document.querySelector(".js-button");
const text = document.querySelector(".js-text");

button.addEventListener("click", () => {
  console.log("Alerta"); 
  text.innerHTML= `Mi primer click`
});