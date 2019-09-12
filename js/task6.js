"use strict";

const input = document.getElementById("validation-input");

const validateInputLegth = e => {
  if (e.target.value.length <= input.getAttribute("data-length")) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  }
};

input.addEventListener("blur", validateInputLegth);
