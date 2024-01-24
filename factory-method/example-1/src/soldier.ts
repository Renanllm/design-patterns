import { Unity } from "./unity";

export class Soldier extends Unity {
  attack(unity: Unity): number {
    console.log("Soldier attack");
    return super.attack(unity);
  }
}
