import { Creator } from "./creator";
import { Knight } from "./knight";
import { Unity } from "./unity";

export class ConcreteKnightCreator implements Creator {
  createUnity(life: number, damage: number, movement: number): Unity {
    return new Knight(life, damage, movement);
  }
}
