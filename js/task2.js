"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const createListItem = ingredients => {
  const parentElem = document.querySelector("ul#ingredients");

  for (const ingredient of ingredients) {
    let listItem = document.createElement("li");
    listItem.textContent = ingredient;
    parentElem.append(listItem);
  }
};

createListItem(ingredients);
