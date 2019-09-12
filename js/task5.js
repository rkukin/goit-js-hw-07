"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const checkOutput = e => {
  if (e.target.value === "") {
    output.textContent = "незнакомец";
  } else output.textContent = e.target.value;
};

input.addEventListener("input", checkOutput);
