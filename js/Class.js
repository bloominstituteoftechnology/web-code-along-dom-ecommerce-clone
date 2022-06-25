export class Product {
  constructor(props) {
    this.name = props.name;
    this.price = props.price;
    this.description = props.description;
    this.image = props.image;
  }

  checkStock() {
    return `${this.name} is in stock.`;
  };
}

export class Clothing extends Product {
  constructor(props) {
    super(props);
    this.category = props.category;
    this.size = props.size;
  }

  checkSizes() {
    return `${this.name} in size ${this.size} is in stock.`;
  };
}
