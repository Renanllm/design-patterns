import { Product } from "./product";
import { ProductFactory } from "./productFactory";
import { Soda } from "./soda";
import { Water } from "./water";

export class BeverageFactory extends ProductFactory {
    createProduct(price: number, type: string): Product {
        switch (type) {
            case "water":
                return new Water(price);
            case "soda":
                return new Soda(price);
            default:
                throw new Error("Invalid product type");
        }
    }
}