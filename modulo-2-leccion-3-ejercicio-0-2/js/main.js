const buttonElement = document.querySelector(".button");

buttonElement.addEventListener("click", ()=>{
  console.log(event.currentTarget);
});
const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");

strawberry.addEventListener("click", ()=>{
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
banana.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});
kiwi.addEventListener("click", ()=>{
  const selectedFruit = event.currentTarget;
  selectedFruit.classList.toggle("fruit--selected");
});

const buttonElement = document.querySelector(".alert");
buttonElement.removeEventListener("click", () => {
  //..código
});