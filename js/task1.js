"use strict";

const categories = document.querySelectorAll("li.item");

console.log(`В списке ${categories.length} категории.`);

for (let i = 0; i < categories.length; i++) {
  console.log(`Категория: ${categories[i].firstElementChild.innerText}`);
  console.log(`Категория: ${categories[i].lastElementChild.childElementCount}`);
}
