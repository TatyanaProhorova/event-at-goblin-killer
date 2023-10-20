import Counter from "./counter";
import ScoreWidget from "./score";

export default class Goblin {
  constructor(holes) {
    this.holePositions = holes.querySelectorAll('.position');
    this.goblinPosition = holes.querySelector('.goblin');
    this.counter = new Counter;              // Counter instance
    this.countTotal = this.counter.countTotal.bind(this.counter);
    this.countDamagedGoblins = this.counter.countDamagedGoblins.bind(this.counter);
    this.signalNewGame = this.counter.signalNewGame.bind(this.counter);
  }
  
  jump() {
    let randomPositionNumber = Math.floor(Math.random() * (this.holePositions.length));
    let previous = randomPositionNumber;   //////////////////////////////////
    let damaged = 0;
    let baseInterval;
    ////////// this.goblinPosition   this => undefined   теряется, если сед. блок поместить в конце скрипта
    //////////   почему???
    this.goblinPosition.addEventListener('click', () => {
      if (this.signalNewGame() !== 1) {
        let goblin = document.querySelector('.goblin');  // const
        goblin.classList.add('remove');
        damaged = this.counter.countDamagedGoblins();
        console.log('removed  ', damaged);
      }  
    });
    //////////
    //////////////   TODO  replace display:None by toggling of class goblin    /////////////
    baseInterval = setInterval(() => {
                  console.log("this.signalNewGame()", this.signalNewGame());
      let total = this.counter.countTotal();
      if (this.signalNewGame() !== 1) {
                  console.log('Total  ' + (total + 1));
      
        while (randomPositionNumber === previous) {
          randomPositionNumber = Math.floor(Math.random() * (this.holePositions.length));
        };
        previous = randomPositionNumber;
        this.holePositions[randomPositionNumber].appendChild(this.goblinPosition);
        this.goblinPosition.classList.remove('remove');  // если был убит, удаляем класс 'remove'
      } else {                        // its time to finish the game
        clearInterval(baseInterval);  //  next goblin must not appear 
        this.goblinPosition.classList.add('remove');    
        total = 0;
        console.log("выходим из игры \n поразили", damaged); //вывести счет в консоль

        const scoreWidget = new ScoreWidget(damaged); // и в окошко игры
        scoreWidget.bindToDom();
        return;
      };
    }, 3000); 
    console.log('total first');
    
    return damaged;
  };
};
