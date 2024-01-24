import { Unity } from "./unity";

export class Archer extends Unity {
  attack(unity: Unity): number {
    console.log("Archer attack");
    return super.attack(unity);
  }
}
