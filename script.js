//Getting all buttons and dice variable

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceImage = document.getElementById('dice');

//Setting global variables

let currentScore, globalScore, activePlayer;
let gameActive = true;

//Function for random number of a dice

function randomDiceNumber() {
  return Math.floor(Math.random() * 6 + 1);
};

//Function for diplay dice icons

function diceImageDisplay(number) {
  switch (number) {
    case 1:
      return 'fa-dice-one';
    case 2:
      return 'fa-dice-two';
    case 3:
      return 'fa-dice-three';
    case 4:
      return 'fa-dice-four';
    case 5:
      return 'fa-dice-five';
    case 6:
      return 'fa-dice-six';
  };
};

// Buttons event

roll.addEventListener('click', () => {
  if (gameActive) {
    let dice = randomDiceNumber();
    diceImage.classList.replace(diceImage.classList[1], diceImageDisplay(dice));
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-score0`).innerText = currentScore;
    } else {
      document.getElementById('current-score0').classList.remove('active');
    }
  }
});