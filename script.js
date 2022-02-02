//Getting all buttons and dice variable

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceImage = document.getElementById('dice');

//Setting global variables

let currentScore, globalScore, activePlayer;
let gameActive = false;
const scoreToWin = 20;

//Function for random number of a dice

function randomDiceNumber() {
  return Math.floor(Math.random() * 6 + 1);
};

//Function displayGame and initialisation of all stats

function displayGame() {
  currentScore = 0;
  globalScore = [0, 0];
  gameActive = true;
  activePlayer = 0;

  document.getElementById('current-score0').innerText = 0;
  document.getElementById('current-score1').innerText = 0;
  document.getElementById('global-score0').innerText = 0;
  document.getElementById('global-score1').innerText = 0;

  document.getElementById('player0').classList.remove('active');
  document.getElementById('player1').classList.remove('active');
  document.getElementById('player0').classList.remove('winner');
  document.getElementById('player1').classList.remove('winner');
  document.getElementById('player0').classList.add('active');
}

//Function switchPlayer when round is finish

function switchPlayer() {
  currentScore = 0;
  activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

  document.getElementById(`player${activePlayer}`).classList.toggle('active');
  document.getElementById('current-score0').innerText = 0;
  document.getElementById('current-score1').innerText = 0;
}

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
      document.getElementById(`current-score${activePlayer}`).innerText = currentScore;
    } else {
      document.getElementById(`current-score${activePlayer}`).classList.remove('active');
      switchPlayer();
    }
  }
});

hold.addEventListener('click', () => {
  if (gameActive) {
    globalScore[activePlayer] += currentScore;
    document.getElementById(`global-score${activePlayer}`).innerText = globalScore[activePlayer];
    if (globalScore[activePlayer] < scoreToWin) {
      document.getElementById(`player${activePlayer}`).classList.remove('active');
      switchPlayer();
    } else {
      gameActive = false;
      document.getElementById(`player${activePlayer}`).classList.add('winner');
      document.getElementById(`player${activePlayer}`).innerText = 'WINNER !';
    }
  }
});

displayGame();