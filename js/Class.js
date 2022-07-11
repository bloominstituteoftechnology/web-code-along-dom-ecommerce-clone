export class ProductClass {
  constructor(props) {
    this.title = props.title;
    this.price = props.price;
    this.description = props.description;
    this.image = props.image;
  }

  checkStock() {
    return `${this.title} is in stock.`;
  };
}

export class ClothingClass extends ProductClass {
  constructor(props) {
    super(props);
    this.category = props.category;
    this.size = props.size;
  }

  checkSizes() {
    return `${this.title} in size ${this.size} is in stock.`;
  };
}
