"use strict";

const categoriesCount = document.querySelectorAll("li.item");

const categoriesTitles = document.querySelectorAll("li.item > h2");

const subcategoriesCount = document.querySelectorAll("li.item > ul");

console.log(`В списке ${categoriesCount.length} категории.`);

for (let category of categoriesTitles) {
  console.log(`Категория: ${category.innerText}`);
  console.log(`Кол-во елементов: ${categoriesCount}`);
}
