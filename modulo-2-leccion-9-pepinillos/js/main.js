"use strict";

const listPersons =[
    ["Pedro", "perez"],
    ["Maricarmen", "ruiz"],
    ["Almudena", "sanchez"]
];
for (const person of listPersons) {
    //console.log(person);
    for (const name of person) {
        console.log(name);
    }
}

for (let i = 0; i< person.length;i++) {
    if (i === 0) {
        console.log(person[i]);
    }
}