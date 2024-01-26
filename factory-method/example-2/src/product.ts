export abstract class Product {
  constructor(readonly price: number) {}

  getPrice() {
    return this.price;
  }

  abstract dispense(): string;
}
