export default class Counter {
  constructor() {
    this.damagedGoblin = 0;
    this.totalGoblin = 0;
    this.threshold = 2; //  difference
    this.game = 0;
  }

  countTotal() {
      this.totalGoblin = this.totalGoblin + 1;
      return this.totalGoblin;
  }

  countDamagedGoblins() {
    this.damagedGoblin = this.damagedGoblin + 1;
    return this.damagedGoblin;
  }

  signalNewGame() {
    if ((this.totalGoblin - this.damagedGoblin) ===  this.threshold ) {
    // if ((this.totalGoblin - this.damagedGoblin) === cycles - 1 ) {
      console.log('lost GAME   Damaged = ' + this.damagedGoblin);
      self.game = 1;
      return self.game;
    };
  }
};
