import { Unity } from "./unity";

export abstract class Creator {
    abstract createUnity(life: number, damage: number, movement: number): Unity;
}