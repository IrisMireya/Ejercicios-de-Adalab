'use strict';
//objeto literal
const coche = {
    marca: 'Audi',
    modelo 'Q8',
    year: 2022,
    color: 'negro',
    vendido:false,
    vender: function() {
        console.log ('vendido'+ this.vendido);
    },
    matri: 'sdfd',
};
console.log(coche.marca);
coche.vender();
coche.year =2021;
console.log(coche.year);
coche.pintar();

const.coche2 ={};
coche2.marca ='mazda';
coche2.modelo = 'cx5';

coche2('year') = 2020;
const propiedad = "color";
coche2(propiedad) ='rojo';
console.log(coche2);