class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super();
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
    this.job = 'find pollen';
  }
  forage (value) {
    this.treasureChest.push(value);
  }
}
