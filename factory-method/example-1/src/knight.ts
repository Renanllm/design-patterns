import { Unity } from "./unity";

export class Knight extends Unity {
  attack(unity: Unity): number {
    console.log("Knight attack");
    return super.attack(unity);
  }
}
