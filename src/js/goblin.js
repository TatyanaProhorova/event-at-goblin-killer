export default class Goblin {
  constructor(hole) {
    this.hole_positions = hole.querySelectorAll('.position');
    this.goblin_position = hole.querySelector('.goblin');
  }

  jump() {
    let previous = 0;
    let random_position_number = 0;

    setInterval(() => {
      while (random_position_number === previous) {
        random_position_number = Math.floor(Math.random() * (this.hole_positions.length - 1));
      }
      previous = random_position_number;
      this.hole_positions[random_position_number].appendChild(this.goblin_position);
    }, 1000);
  }
}
