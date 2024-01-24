import { Creator } from "./creator";
import { Soldier } from "./soldier";
import { Unity } from "./unity";

export class ConcreteSoldierCreator implements Creator {
  createUnity(life: number, damage: number, movement: number): Unity {
    return new Soldier(life, damage, movement);
  }
}
