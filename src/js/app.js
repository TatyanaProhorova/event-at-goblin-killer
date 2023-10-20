import Goblin from './goblin';

document.addEventListener('DOMContentLoaded', () => {

  const Game = new Goblin(document.querySelector('.playing-field'));  
  Game.jump();
 });
    