export function Product(props) {
  this.name = props.name;
  this.price = props.price;
  this.description = props.description;
  this.image = props.image;
}

Product.prototype.checkStock = function () {
  return `${this.name} is in stock.`;
};

export function Clothing(props) {
  Product.call(this, props);
  this.category = props.category;
  this.size = props.size;
}

Clothing.prototype = Object.create(Product.prototype);

Clothing.prototype.checkSizes = function (size) {
  return `${this.name} in size ${size} is in stock.`;
};
