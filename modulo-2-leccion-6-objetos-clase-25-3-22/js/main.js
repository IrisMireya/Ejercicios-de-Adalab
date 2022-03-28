'use strict';
/*
1.- Obtener los elementos de HTML (campos de sallida-> tabla)
2.- Escuchar el evento click sobre el botón (crear el ciente)
3.- Crear la funcionalidad para pintar en la tabla
*/

const inpudId = document.querySelector('.js_id');
const inpudName = document.querySelector('.js_name');
const inpudBusineess = document.querySelector('.js_business');
const inpudContact = document.querySelector('.js_contact');
const inpudBtn = document.querySelector('.js_button');
const table = document.querySelector('.js_table');

function getClientData(){
    const name =inputName.value;
    const id =inputId.value;
    const business = inputBusiness.value;
    const contact = inputContact.value;

    table.innerHTML += `<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${business}</td>
    <td>${contact}</td>
    </td>`;
}
function handleClick(event){
    event.preventDefault();
    getClientData();
    paintHtml();
}

inputBtn.addEventListener('click',getClientData);
