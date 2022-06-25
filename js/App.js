import ProductProto from "./Prototype";
// import ProductClass from "./Class";
// import ClothingProto from "./Prototype";
// import ClothingClass from "./Class";

import data from "../data";

const list = document.querySelector(".product-list");

function CardMaker(product) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const heading = document.createElement("h3");
  //   const text = document.createElement("p");

  card.classList.add("item");
  img.classList.add("item-image");
  heading.classList.add("item-label");
  //   text.classList.add("item-label");
  img.src = product.image;
  heading.textContent = product.name;
  //   text.textContent = product.category;

  card.appendChild(img);
  card.appendChild(heading);
  //   card.appendChild(text);

  return card;
}

const protos = [];
// const classes = [];
data.forEach((item) => {
  const productProto = new ProductProto(item);
  // const productClass = new ProductClass(item);
  // const clothingProto = new ClothingProto(item);
  // const clothingClass = new ClothingClass(item);

  protos.push(productProto);
  // classes.push(productClass);
  // protos.push(clothingProto);
  // classes.push(clothingClass);
});

protos.forEach((item) => {
  const card = CardMaker(item);
  list.append(card);
});

// classes.forEach((item) => {
//   const card = CardMaker(item);
//   list.append(card);
// });
