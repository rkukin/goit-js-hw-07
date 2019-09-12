"use strict";

const input = document.querySelector("#controls>input");
const destroy = document.querySelector('[data-action="destroy"]');
const render = document.querySelector('[data-action="render"]');
const boxesContainer = document.querySelector("#boxes");

function renderDivs() {
  let divSize = 30;
  for (let i = 0; i < input.value; i++) {
    let div = document.createElement("div");
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() *
      256}, ${Math.random() * 256})`;
    boxesContainer.append(div);
    divSize = divSize + 10;
  }
}

render.addEventListener("click", renderDivs);

destroy.addEventListener("click", () => {
  while (boxesContainer.lastChild) {
    boxesContainer.removeChild(boxesContainer.lastChild);
  }
});
