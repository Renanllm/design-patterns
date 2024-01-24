import { Archer } from "../src/archer";
import { ConcreteArcherCreator } from "../src/concreteArcherCreator";
import { ConcreteKnightCreator } from "../src/concreteKnightCreator";
import { ConcreteSoldierCreator } from "../src/concreteSoldierCreator";
import { Knight } from "../src/knight";
import { Soldier } from "../src/soldier";
import { Unity } from "../src/unity";

function getUnitiesByType(unities: Unity[]) {
  const unitiesByType: { [key: string]: number } = {};

  unities.forEach((unity) => {
    unitiesByType[unity.getType()] = unitiesByType[unity.getType()] + 1 || 1;
  });

  return unitiesByType;
}

let army = [] as Unity[];

beforeEach(() => {
  army = [];
});

const concreteSoldierCreator = new ConcreteSoldierCreator();
const concreteArcherCreator = new ConcreteArcherCreator();
const concreteKnightCreator = new ConcreteKnightCreator();

test("should return the right amount of unities in the army", () => {
  army = army.concat([
    concreteSoldierCreator.createUnity(200, 10, 1),
    concreteArcherCreator.createUnity(100, 15, 2),
    concreteArcherCreator.createUnity(150, 20, 2),
    concreteKnightCreator.createUnity(200, 10, 1),
  ]);
  const unitiesByType = getUnitiesByType(army);
  expect(unitiesByType["Soldier"]).toBe(1);
  expect(unitiesByType["Archer"]).toBe(2);
  expect(unitiesByType["Knight"]).toBe(1);
});

test("should return the right amount of unities in the army - 2", () => {
  army = army.concat([
    concreteKnightCreator.createUnity(200, 10, 1),
    concreteArcherCreator.createUnity(100, 15, 2),
    concreteSoldierCreator.createUnity(200, 10, 1),
    concreteSoldierCreator.createUnity(200, 10, 1),
  ]);
  const unitiesByType = getUnitiesByType(army);
  expect(unitiesByType["Soldier"]).toBe(2);
  expect(unitiesByType["Archer"]).toBe(1);
  expect(unitiesByType["Knight"]).toBe(1);
});
