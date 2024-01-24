import { Archer } from "./archer";
import { Creator } from "./creator";
import { Unity } from "./unity";

export class ConcreteArcherCreator implements Creator {
  createUnity(life: number, damage: number, movement: number): Unity {
    return new Archer(life, damage, movement);
  }
}
