export default class ScoreWidget {
  constructor(score) { 
    this.score = score; // damaged in str-format
  }
  bindToDom() {
    let scoreString = document.createElement('div');
    scoreString.className = "scoreString";
    scoreString.innerHTML = 
    'SCORE:      <output class="output"></output><span>  OF GOBLINS DAMAGED</span>';
    document.body.append(scoreString);
    let output = document.querySelector('.output');
    // let output = document.body.getElementsByTagName('output');
    console.dir(output);
    output.textContent = this.score;

    //  count of damaged
  }

}
        