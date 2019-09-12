"use strict";

let counterValue = 0;

const value = document.querySelector("#value");

const increment = () => {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue = counterValue - 1;
  value.textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", decrement);
