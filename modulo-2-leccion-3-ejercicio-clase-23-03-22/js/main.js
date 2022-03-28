"use strict";

const inputName = document.querySelector ('.js_name');
const inputLastname = document.querySelector('.js_lastName');
const button = document.querySelector('.js_button');
const result = document.querySelector('.js_result');

button.addEventListener("click",() => {
    const name = inputName.value;
    const lastName =  inputlastname.value;
    result.innerHTML = name + lastName;
});

inputName.addEventListener('keyup', () => {
    document.querySelector(".js_title").innerHTML = inputName.value;
});

inputLastname.addEventListener("keyup",() => {
document.querySelector('.js_last').innerHTML = inputLastname.value;
});