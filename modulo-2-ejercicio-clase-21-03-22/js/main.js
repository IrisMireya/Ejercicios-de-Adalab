"use strict";
const list = document.querySelector ('.jslist');

const name = 'dayana';
let age = document.querySelector('.js-age').value
let ageValue = parseInt(age);
let precio = 200.2;

const item1 = "cebollas";
const price1 = "1.5";
const item2 = "aguacates";
const price2 = "5";
const item3 = "champiñones";
const price3 = 2;

list.innerHTML += `<li> ${item1} <span> ${price1}<span> </li>`;
list.innerHTML += `<li> ${item2} <span> ${price2}<span></li>`;
list.innerHTML += `<li> ${item3} <span> ${price3}<span></li>`;

const total = parseFloat(price1) + parseInt(price2) + price3;
console.log(total);

const iva =total * 0.21;
console.log(iva);

list.innerHTML += `<li> Total ${total} Iva: ${iva}  Total a pagar ${total + iva} </li>`;