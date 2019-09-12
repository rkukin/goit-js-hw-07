"use strict";

const slider = document.getElementById("font-size-slider");
const text = document.getElementById("text");

slider.addEventListener("input", e => {
  text.style.fontSize = `${e.target.value}px`;
});
