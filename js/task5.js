"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const checkOutput = () => {
  if (input.value === "") {
    output.value = "незнакомец";
  } else output.value = input.value;
};

input.addEventListener("input", console.log(input.value));
console.log(input.value);
