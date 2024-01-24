export abstract class Unity {
  constructor (
    private life: number,
    private damage: number,
    private movement: number
  ) {}

  attack(unity: Unity) {
    unity.setLife(unity.getLife() - this.damage)
    return unity.getLife()
  }

  getLife() {
    return this.life
  }

  setLife(life: number) {
    this.life = life
  }

  move() {
    console.log(`Unity moved ${this.movement} spaces`)
  }

  getType() {
    return this.constructor.name
  }
}