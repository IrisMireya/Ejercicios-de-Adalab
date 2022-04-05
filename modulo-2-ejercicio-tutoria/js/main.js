"use strict";
// Sección de querySelector
const name = document.querySelector('.js-name');
const surname = document.querySelector('.js-surname');
const btn = document.querySelector('.js-button');
const result = document.querySelector('.js-result');

// Sección de variables data
// fetch
// Funciones 
// Funciones handler -> Jefa
// addEvenListerer

btn.addEventListener("click", (event) => {
    //console.log("Alerta"); 
    if (name.value === "Iris" && surname.value === "Zuñel"){
      result.innerHTML = "¡Hola Preciosa!";
    }
      else {( name.value !== "Iris")
       result.innerHTML = "No reconocido";
    }
    });

