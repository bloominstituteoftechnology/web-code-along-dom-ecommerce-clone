export function ProductProto(props) {
  this.title = props.title;
  this.price = props.price;
  this.description = props.description;
  this.image = props.image;
}

ProductProto.prototype.checkStock = function () {
  return `${this.title} is in stock.`;
};

export function ClothingProto(props) {
  ProductProto.call(this, props);
  this.category = props.category;
  this.size = props.size;
}

ClothingProto.prototype = Object.create(ProductProto.prototype);

ClothingProto.prototype.checkSizes = function (size) {
  return `${this.title} in size ${size} is in stock.`;
};
