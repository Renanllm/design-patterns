import { Product } from "./product";

export abstract class ProductFactory {
  abstract createProduct(price:number, type?: string): Product;
}