import { HandSanitizer } from "./handSanitizer";
import { Product } from "./product";
import { ProductFactory } from "./productFactory";
import { ToothPaste } from "./toothpaste";

export class HygieneProductsFactory extends ProductFactory {
    createProduct(price: number, type: string): Product {
        switch (type) {
            case "toothpaste":
                return new ToothPaste(price);
            case "handSanitizer":
                return new HandSanitizer(price);
            default:
                throw new Error("Invalid product type");
        }
    }
}