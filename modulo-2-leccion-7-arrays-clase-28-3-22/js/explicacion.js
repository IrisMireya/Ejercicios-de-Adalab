'use strict';

 const m1 = 'lola';
 const m2 = 'manu';
 const m3 = 'zeus';
 const m4 = 'toby';

 const pets =document.querySelector(".js-pets");

 const nameList = ['lola', 'manu', 'zeus', 'toby'];
 console.log(nameList[0], nameList[3]);

 const ListPets =[];
 ListPets[0] = 'lola';
 ListPets[1] = 'pepe';
 console.log(listsPets[1]);

 //añadir las mascotas al HTML
 //i++ ----> i = i+1
 for(let i = 0; i < nameList.length; i++){
    pets.innerHTML += `<li> ${nameList[i]}</li>`;
 }
 //for of
 for (let pet of nameList){
     pets.innerHTML += `<li>${pet}</li>;
 }