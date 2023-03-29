export default class Goblin {
  constructor(hole) {
    this.holePositions = hole.querySelectorAll('.position');
    this.goblinPosition = hole.querySelector('.goblin');
  }

  jump() {
    let previous = 0;
    let randomPositionNumber = 0;

    setInterval(() => {
      while (randomPositionNumber === previous) {
        randomPositionNumber = Math.floor(Math.random() * (this.holePositions.length));
      }
      previous = randomPositionNumber;
      this.holePositions[randomPositionNumber].appendChild(this.goblinPosition);
    }, 1000);
  }
}
