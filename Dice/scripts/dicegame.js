

const menuContainer = document.getElementById('menu-container');
const onePlayerContainer = document.getElementById('player-one-container');
const twoPlayerContainer = document.getElementById('player-two-container');
const btnOnePlayer = document.getElementById('btn-one-player');
const btnTwoPlayer = document.getElementById('btn-two-player');
const btnInfo = document.getElementById('btn-info');
const btnRestart = document.getElementById('btn-restart');

const gameActionContainer = document.getElementById('game-action-container');
onePlayerContainer.style.display = "none";
twoPlayerContainer.style.display = "none"
gameActionContainer.style.display = "none";
let p1Score = 0;
let p2Score = 0;
let p1DiceTotal = 0;
let p2DiceTotal = 0;
let gameTally = [0, 0];
let numPlayers =0;
let currentPlayer = 2;

document.getElementById('btn-restart').addEventListener('click', (evt) => {
    resetScores();
    showPlayerBtns(currentPlayer);
});
document.getElementById('btn-one-player').addEventListener('click', (evt) => {
    console.debug(evt, " triggered on", evt.target)
    
    menuContainer.style.display = "none";
    currentPlayer=1;
    numPlayers=1;
    console.log("cp",currentPlayer,"np",numPlayers)
    resetScores();
    showPlayerBtns(currentPlayer);
    gameActionContainer.style.display = "flex";
    document.getElementById('player-one-container').style.display = "flex";
   
    
});

document.getElementById('btn-two-player').addEventListener('click', (evt) => {
    menuContainer.style.display = "none";
    resetScores();
    gameActionContainer.style.display = "flex";
    onePlayerContainer.style.display = "flex";
    twoPlayerContainer.style.display = "flex";
    currentPlayer=Math.floor(Math.random() * 2)+1;
    numPlayers=2;
    showPlayerBtns(currentPlayer);
});

document.getElementById('btn-menu').addEventListener('click', (evt) => {
    menuContainer.style.display = "flex";
    onePlayerContainer.style.display = "none";
    twoPlayerContainer.style.display = "none";
    (document.getElementById('game-action-container')).style.display = "none";
});

document.querySelectorAll('[class*="fn-hold"]').forEach(btn => {
    btn.addEventListener("click", (evt) => {
        if (numPlayers===1){
            p1Score+=p1DiceTotal;
            document.getElementById('player-one-score').innerHTML=p1Score;
            p1DiceTotal=0;
        }
        if(numPlayers===2) {
        currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
        console.log("player is now", currentPlayer);
        showPlayerBtns(currentPlayer);
        }
    })
});
document.querySelectorAll('[class*="fn-roll"]').forEach(btn => {
    btn.addEventListener("click", (evt) => {
        console.log(diceRoll());
        //diceRoll adds scores
    })
});

function showPlayerBtns(playerIs) {
    console.log("current player is", playerIs)

    // if(numPlayers!==2) {return;}
    if (playerIs == 1) {
        selector1 = '[class*="player-one-btns"]';
        selector2 = '[class*="player-two-btns"]';
    }
    else {
        selector2 = '[class*="player-one-btns"]';
        selector1 = '[class*="player-two-btns"]';
    }

    document.querySelectorAll(selector1).forEach(btn => {
        console.log("DD" + btn)
        btn.style.display = "block";
    });
    document.querySelectorAll(selector2).forEach(btn => {
        btn.style.display = "none";
    });
}

function resetScores() {
     p1Score = 0;
     p2Score = 0;
     p1DiceTotal = 0;
     p2DiceTotal = 0;
     gameTally = [0, 0];
    document.getElementById('player-one-score').innerHTML = p1Score;
    document.getElementById('player-two-score').innerHTML = p1Score;
    document.getElementById('p1-dice-total').innerHTML = p1Score;
    document.getElementById('p2-dice-total').innerHTML = p1Score;
    document.getElementById('player-one-games').innerHTML = p1Score;
    document.getElementById('player-two-games').innerHTML = p1Score;
}


// 3d rotating dice
var eldicePoints = document.getElementById('dice1');
eldicePoints.onclick = function () {diceRoll(); };

//DICE ROLL FUNCTION
function diceRoll() {
    // sets dice variables
    let dicePoints = Math.floor((Math.random() * 6) + 1);
    //Dice reset and display
    for (let i = 1; i <= 6; i++) {
        eldicePoints.classList.remove('show-' + i);
        if (dicePoints === i) {
            eldicePoints.classList.add('show-' + i);
        }
    }
    if (numPlayers===1) {
        //one player game logic
       onePlayerLogic(dicePoints)
    } else {
        //two player game logic
    }
    
    return dicePoints;
} // END DICE ROLL FUNCTION
function onePlayerLogic(dicePoints){
    
    document.getElementById('p1-dice-total').innerHTML = `${p1DiceTotal += dicePoints}`;
    if (p1DiceTotal>21) {
        p1DiceTotal =0;
        return;
    }
    if (p1DiceTotal===21){
        document.getElementById('player-one-score').innerHTML = `${p1Score += p1DiceTotal}`;
        p1DiceTotal=0;
    }
}
