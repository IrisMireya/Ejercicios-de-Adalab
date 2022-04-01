"use strict";
const text = document.querySelector(".js-text");

window.addEventListener("scroll", () => {
  if (window.scrollY>250) {
      text.classList.add("red");
      text.classList.remove("green");
  }
  if (window.scrollY<250)  {
      text.classList.add("green");
      text.classList.remove("red");

    }
  }
);

/* si se pone en green ya no cambia a red,..no sé si eso está bien */