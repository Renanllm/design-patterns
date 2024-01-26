import { Product } from "./product";

export class VendingMachine {
  products: Product[] = []
  
  insertProducts(products: Product[]) {
    this.products.push(...products);
  }

  dispenseAll() {
    const dispenseMessages = this.products.map(product => product.dispense());
    this.products = []
    return dispenseMessages;
  }

  getProducts() {
    return this.products;
  }
}