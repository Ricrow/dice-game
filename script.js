//Getting all buttons and dice variable

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceImage = document.getElementById('dice');

//Setting global variables

let currentScore, globalScore, activePlayer;

//Function for random number of a dice

function randomDiceNumber() {
  return Math.floor(Math.random() * 6 + 1);
};