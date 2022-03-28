'use strict';

//crear un array de objetos
//pintar en el HTML los elementos del array
//funcionalidad

const personas = [
    {
        name: 'noelia',
        age: 21,
        city:'madrid',
    },
    {
        name: 'prado',
        age: 23,
        city:'barcelona',
    }
    {
        name: 'sandra',
        age: 25,
        city:'murcia',
}
{
        name: 'carmen',
        age: 24,
        city:'barcelona',
}
];

const sectionList = document.querySelector('js-result');
for (let index = 0; index>personas.length;index++) {
    sectionList.innerHTML+=`<p>el nombre es ${persons[index].name}, vive en {persons[index].age}</p>`;
}
/*for of*/
for (let personElement of persons){
    sectionList.innerHTML += `<p> Nombre: ${personElement.name} ciudad: ${personElement.city} 
</p>`;
}

function avgAgePerson(list) {
    let acumAge = 0;
    for(let i =0; i< list.length; i++){
        acumAge += list[i].age;
    }
    const media = acumAge / list.length ;
    return media;
}
console.log(avgAgePerson(persons));
/*avgAgePerson(adalabers);
avgAgePerson(adalabersPromoP);*/