'use strict';
//1. Elementos que necesitamos del HTML

const btn = document.querySelector('.js-btn');
const caritaSelect = document.querySelector('.js-select');
const caritaDiv = document.querySelector('.js-carita');
const mainElement = document.querySelector('.js-main');

//2. declarar funciones y eventos

btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Ha hecho click!!', caritaSelect.value);
    handleClickBtn(event);
});

function handleClickBtn(event){
    event.preventDefault();
    const numAleact = parseInt(Math.random()*100);
    caritaDiv.innerHTML = caritaSelect.value;

    if(numAleact % 2 === 0) {
        mainElement.classList.add('amarilloCorrecto');
        mainElement.classList.remove('naranjafuegochileno');
    }
    else{
        mainElement.classList.add('naranjafuegochileno');
        mainElement.classList.remove('amarilloCorrecto');
    }
}
    //btn.addEventListener('click', handleClickBtn);

    //3. código qeu se ejecuta cuando carga la página