'use strict';
//al hacer click en el botón acepto de dber ocultar el popup
// al hacer click en una comida se va a añadir a la sección de orden de compra

const closeButton = document.querySelector('.js-close');
const overlay = document.querySelector('.js-overlay');
const order = document.querySelector('.js-order');
const liOption1 = document.querySelector('js-add1');

function closePopUp() {
    overlay.classList.add('hidden');
}

closeButton.addEventListener('click', closePopUp);

const addItem = (event) => {
    const liValue = event.currentTarget.innerHTML;
    order.innerHTML += `<p> ${liValue} </p>`;
};

/*liOption1.addEventListener('click',addItem);
liOption2.addEventListener('click',addItem);
liOption3.addEventListener('click',addItem);*/

function addItem2(event){
    //escucho
    console.log(event.currentTarget);
    //accion
    console.log (event.target);
    order.innerHTML += `<p> ${liValue} </p>`;
}
//listFood.addEventListener('click', addItem2);