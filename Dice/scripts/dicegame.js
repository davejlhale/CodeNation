


/****************************
*                           *
*     global defines        *
*                           *
****************************/
let mainMenu = document.getElementById('main-menu');
let gameScreen = document.getElementById('game-action-container');
let playableDice = document.getElementById(`playable-dice`);
let playerSelectRefs = document.querySelectorAll('[class*="btn-player-choice"]');


let animationsOn = true;

let debug = (msg) => { console.debug(msg); };
let log = (msg) => { console.log(msg); };
/****/


/*
    end of gloabl defines 
*/


/****************************
*                           *
*     event listnters       *
*                           *
****************************/

//add click event listnter to playable dice
playableDice.addEventListener('click', () => {
  console.log(`spun a `, spinDice(playableDice));
});

document.getElementById('btn-restart').addEventListener('click' , () => {
  gameRef.resetPlayers()
})

document.getElementById('btn-menu').addEventListener('click', () => {
  console.debug("Menu button clicked");
  mainMenu.style.display = "flex";
  gameScreen.style.display = "none"
  playableDice.style.display = "none"
  animationsOn = true;
  animateDice();
})


/********************************\
*                                *
*   player class declarations    *
*                                *
\********************************/
class Player {
  static #count = 0;
  constructor() {
    this.totalScore = 0;
    this.currentScore = 0;
    this.active = false;
    this.hadTurn = false;
    this.gamesWon = 0;
    this.panel=false;
    this.index =Player.#count++;
  }
  resetPlayer() {
    console.debug("player.resetPlayer", this)
    this.totalScore = 0;
    this.currentScore = 0;
    this.hadTurn = false;
    this.active = false;
    this.gamesWon = 0;
    this.display();
  }

  display(){
    debug(this.panel);
    this.panel.querySelector('#player-score').innerHTML = this.totalScore;
    this.panel.querySelector('#player-dice-total').innerHTML = this.currentScore;
    }
  setActive(status) {
    this.active = status;
  }
  isActive() {
    return this.active;
  }
  setTurn(status) {
    this.hadTurn = status;
  }
  addToTotalScore(num) {
    this.totalScore += num;
  }
  addToCurrentScore(num) {
    this.currentScore += num;
  }
  static get COUNT() {
    return Player.#count;
  }
}

/********************************\
*                                *
*    game class declarations     *
*                                *
\********************************/
class game {
  constructor(scoreToReach = 21) {
    this.numplayers;
    this.scoreToReach = scoreToReach;
    this.players = [];
  }
  start(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers
    debug("game.start");
    this.initPlayers();
    this.displayPlayerPanels();
    this.resetPlayers();
    
  }
  /* end of start */

  resetPlayers() {
    let startPlayer = Math.floor((Math.random() * this.numberOfPlayers) + 1);
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.players[i].resetPlayer();
      if (i===(startPlayer-1)){
        this.players[i].active =true;
      }
    };
  }

  initPlayers() {
    console.debug("game.initPlayers", this.numberOfPlayers)
    if (Player.COUNT >= this.numberOfPlayers) {
      console.debug("enough player instances already : ", Player.COUNT)
    } else {
      while (Player.COUNT < this.numberOfPlayers)
        this.players.push(new Player());
      console.debug(`inititialised player `, Player.COUNT);
    }
  }

  displayPlayerPanels() {
    debug("turning on " + this.numberOfPlayers + " panels")
    let elems = document.getElementsByClassName("player-panel");
    let pnum=1;
    Array.from(elems).forEach(panel => {
      panel.style.display = 'none';
      panel.id = "player"+pnum++;
    });
    for (let i = 0; i < this.numberOfPlayers; i++) {
      debug(`panel ${i + 1} on`)
      elems[i].style.display = 'flex';
      this.players[i].panel = elems[i];
    };
  }

}

/********************************\
*                                *
*  function declarations         *
*                                *
\********************************/

//copy html dice into shortened html placeholder tags
function replaceDicePlaceholders() {
  let placeHolders = document.getElementsByClassName('dice-placeholder');
  for (i = 0; i < placeHolders.length; i++) {
    const clone = document.getElementById(`playable-dice`).cloneNode(true);
    clone.id = "";
    placeHolders[i].appendChild(clone);
  }
}

function animateDice() {
  Array.from(document.getElementsByClassName(`dice`)).forEach(die => {
    if (die.id != 'playable-dice') {
      function aniateRolls() {
        let randomInterval = Math.floor(Math.random() * (4000 - 500 + 1)) + 500;
        let id = setTimeout(function () {
          if (animationsOn) {
            clearTimeout(id);
            spinDice(die);
            aniateRolls();
          }
        }, randomInterval);
      }
      aniateRolls();
    }
  });
}

function addMainMenuEvents() {
  //for each potential player
  let numberOfPlayers = 0;
  playerSelectRefs.forEach(playerBtn => {
    playerBtn.innerHTML = ++numberOfPlayers + " Player"
    playerBtn.numberOfPlayers = numberOfPlayers;
    //add the menu button click evenlistner
    playerBtn.addEventListener('click', (evt) => {
      numberOfPlayers = playerBtn.numberOfPlayers;
      console.debug(`Number of players selected to play ${numberOfPlayers}`);
      mainMenu.style.display = "none";
      gameScreen.style.display = "flex"
      playableDice.style.display = "flex"
      animationsOn = false;
      gameRef.start(numberOfPlayers)
    });
  });
}

function spinDice(die) {
  let dicePoints = Math.floor((Math.random() * 6) + 1);
  console.log("spinning die")
  for (let i = 1; i <= 6; i++) {
    die.classList.remove('show-' + i);
    if (dicePoints === i) {
      die.classList.add('show-' + i);
    }
  }
  return dicePoints;
}

replaceDicePlaceholders();
animateDice();
gameRef = new game();
addMainMenuEvents();