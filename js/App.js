// import { ProductProto } from "./Prototype.js";
// import { ProductClass } from "./Class.js";
// import { ClothingProto } from "./Prototype.js";
import { ClothingClass } from "./Class.js";

import data from "../data.js";

const list = document.querySelector(".product-list");

function CardMaker(product) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");
  const category = document.createElement("p");

  card.classList.add("item");

  img.src = product.image;
  img.classList.add("item-image");

  text.textContent = product.title;
  text.classList.add("item-label");
  
  category.textContent = product.category;
  category.classList.add("item-label");

  card.appendChild(img);
  card.appendChild(text);

  return card;
}

// const protos = [];
const classes = [];
data.forEach((item) => {
  // const productProto = new ProductProto(item);
  // const clothingProto = new ClothingProto(item);
  // const productClass = new ProductClass(item);
  const clothingClass = new ClothingClass(item);

  // protos.push(productProto);
  // protos.push(clothingProto);
  // classes.push(productClass);
  classes.push(clothingClass);
});

// protos.forEach((item) => {
//   const card = CardMaker(item);
//   list.append(card);
// });

classes.forEach((item) => {
  const card = CardMaker(item);
  list.append(card);
});
