'use strict';
/*
flujo-- cuando carga la página
----
1.- Pido los datos al servidor
2.- pinto los datos en el html
3.-escuchas evento sobre checkbox
*/

/*
flujo-- cuando ocurre las acciones de la usuaria
1.- cuando la ususaria haga click en el hceck box, recogo los datos
2.- modificar datos
3.- repintar los datos
4.-volver a escuchar eventos
*/

let taks =[];

function get Data () {
  fetch ('http://api.igarrido.es/tasks.json')
  .then((response)=> response.json())
  .then((data) =>{
    taks = data;
    console.log(taks);
  });
}
GetData();

function renderList() {
  let html ='';
  for (let i =0; i < tasks.length;i++) {
    html += `<li>`;
    html += `<input type="checkbox" class="js-complete"> ${tasksz[i].name}
  }`;
    html +=`</li>`;
    listTask.innerHTML = html;
}
function handleClick() {
  console.log('he hecho click en el checkbox');
}
function listenCheckbox(){
  const checkboxList = document.querySelectorAll('js-complete');
  for (const oneCheckbox od checkboxList){
    oneCheckbox.addEventListener('click', handleClick);
  }
}
