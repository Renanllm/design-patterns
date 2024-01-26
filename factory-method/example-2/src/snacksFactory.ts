import { Chips } from "./chips";
import { Chocolate } from "./chocolate";
import { Popcorn } from "./popcorn";
import { Product } from "./product";
import { ProductFactory } from "./productFactory";

export class SnacksFactory extends ProductFactory {
    createProduct(price: number, type: string): Product {
        switch (type) {
            case "chocolate":
                return new Chocolate(price);
            case "chips":
                return new Chips(price);
            case "popcorn":
                return new Popcorn(price);
            default:
                throw new Error("Invalid product type");
        }
    }
}