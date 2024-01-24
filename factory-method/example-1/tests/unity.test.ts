import { Archer } from "../src/archer"
import { Soldier } from "../src/soldier"

test("should unity A attacks unity B properly", () => {
  const soldier = new Soldier(200, 10, 1) 
  const archer = new Archer(100, 20, 2)
  soldier.attack(archer)
  expect(archer.getLife()).toBe(90)
})