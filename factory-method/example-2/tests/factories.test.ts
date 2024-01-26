import { BeverageFactory } from "../src/beverageFactory";
import { HygieneProductsFactory } from "../src/hygieneProductsFactory";
import { SnacksFactory } from "../src/snacksFactory";
import { VendingMachine } from "../src/vendingMachine";

const vendingMachine = new VendingMachine();

const snackFactory = new SnacksFactory();
const beverageFactory = new BeverageFactory();
const hygieneProductsFactory = new HygieneProductsFactory();

beforeEach(() => {
  vendingMachine.dispenseAll();
});

test("should store products properly", () => {
  const chocolate = snackFactory.createProduct(5, "chocolate");
  const chips = snackFactory.createProduct(7, "chips");
  vendingMachine.insertProducts([chocolate, chips]);
  expect(vendingMachine.getProducts().length).toBe(2);
});

test("should recognize and dispense snacks properly", () => {
  const chocolate = snackFactory.createProduct(5, "chocolate");
  const chips = snackFactory.createProduct(7, "chips");
  vendingMachine.insertProducts([chocolate, chips]);
  const expectedDispenseMessages = ["Dispensing chocolate", "Dispensing chips"];
  const dispensedProducts = vendingMachine.dispenseAll();
  const allDispeseMessageAreRight = dispensedProducts.every((dispenseMessage, index) => dispenseMessage === expectedDispenseMessages[index]);
  expect(dispensedProducts.length).toBe(2);
  expect(vendingMachine.getProducts().length).toBe(0);
  expect(allDispeseMessageAreRight).toBeTruthy();
});

test("should recognize and dispense beverages properly", () => {
  const soda = beverageFactory.createProduct(10, "soda");
  const water = beverageFactory.createProduct(3, "water");
  vendingMachine.insertProducts([soda, water]);
  const expectedDispenseMessages = ["Dispensing soda", "Dispensing water"];
  const dispensedProducts = vendingMachine.dispenseAll();
  const allDispeseMessageAreRight = dispensedProducts.every((dispenseMessage, index) => dispenseMessage === expectedDispenseMessages[index]);
  expect(dispensedProducts.length).toBe(2);
  expect(vendingMachine.getProducts().length).toBe(0);
  expect(allDispeseMessageAreRight).toBeTruthy();
});

test("should recognize and dispense hygiene products properly", () => {
  const toothpaste = hygieneProductsFactory.createProduct(20, "toothpaste");
  const handSanitizer = hygieneProductsFactory.createProduct(15, "handSanitizer");
  vendingMachine.insertProducts([toothpaste, handSanitizer]);
  const expectedDispenseMessages = ["Dispensing tooth paste", "Dispensing hand sanitizer"];
  const dispensedProducts = vendingMachine.dispenseAll();
  const allDispeseMessageAreRight = dispensedProducts.every((dispenseMessage, index) => dispenseMessage === expectedDispenseMessages[index]);
  expect(dispensedProducts.length).toBe(2);
  expect(vendingMachine.getProducts().length).toBe(0);
  expect(allDispeseMessageAreRight).toBeTruthy();
});

test("should recognize and dispense popcorn properly", () => {
  const popcorn = snackFactory.createProduct(12.5, "popcorn");
  vendingMachine.insertProducts([popcorn]);
  const expectedDispenseMessages = ["Dispensing popcorn"];
  const dispensedProducts = vendingMachine.dispenseAll();
  const allDispeseMessageAreRight = dispensedProducts.every((dispenseMessage, index) => dispenseMessage === expectedDispenseMessages[index]);
  expect(dispensedProducts.length).toBe(1);
  expect(vendingMachine.getProducts().length).toBe(0);
  expect(allDispeseMessageAreRight).toBeTruthy();
});

test("should recognize and dispense different types of products properly", () => {
  const toothpaste = hygieneProductsFactory.createProduct(20, "toothpaste");
  const handSanitizer = hygieneProductsFactory.createProduct(15, "handSanitizer");
  const water = beverageFactory.createProduct(3, "water");
  const chocolate = snackFactory.createProduct(5, "chocolate");
  vendingMachine.insertProducts([toothpaste, handSanitizer, water, chocolate]);
  const expectedDispenseMessages = ["Dispensing tooth paste", "Dispensing hand sanitizer", "Dispensing water", "Dispensing chocolate"];
  const dispensedProducts = vendingMachine.dispenseAll();
  const allDispeseMessageAreRight = dispensedProducts.every((dispenseMessage, index) => dispenseMessage === expectedDispenseMessages[index]);
  expect(dispensedProducts.length).toBe(4);
  expect(vendingMachine.getProducts().length).toBe(0);
  expect(allDispeseMessageAreRight).toBeTruthy();
});