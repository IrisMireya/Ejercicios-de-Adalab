"use strict";

const button1 = document.querySelector(".js-button1");
const button2 = document.querySelector(".js-button2");


button1.addEventListener("click", toggle)
function toggle() {
    console.log(button1);
    button1.classList.toggle("button");
  }

  button2.addEventListener("click", toggle)
function toggle() {
    console.log(button2);
    button2.classList.toggle("button");
  }