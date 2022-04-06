'use strict';
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);


//Si quisiéramos que cada 2 segundos se incrementara dos segunodos, la función sería la siguiente:

// const timer = () => {
//   counter = counter + 2;
//   time.innerHTML = counter;
// }

// setInterval(timer, 2000);