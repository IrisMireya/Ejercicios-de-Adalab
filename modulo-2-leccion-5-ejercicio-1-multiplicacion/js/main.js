"use strict";

const saludo = document.querySelector('.js-saludo');
const despedida = document.queryCommandIndeterm('.js-despedida');

function saludar () {
    return `<li> Rosa </lil>`;
}

const paintConsole = (age) => {
    if (age >18){
        console.log('bienvenido a mi web');
    } else{
        console.log('debes esperar unos añitos');
    }
};

saludo.innerHTML += saludar('rosa');
saludo.innerHTML += saludar ('prado');

despedida.innerHTML += saludar('sara');

paintConsole(20);
paintConsole(15);

//function multiplication(a,b) {
    return a*b}//

console.log(multiplication(2,2));
console.log(multiplication(6,2)); //