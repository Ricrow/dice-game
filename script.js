//Getting all buttons and dice variable

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
const diceImage = document.getElementById('dice');

//Setting global variables

let currentScore, globalScore, activePlayer;
let gameActive = false;
const scoreToWin = 100;

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

  document.getElementById('player0').innerText = 'Player 1';
  document.getElementById('player1').innerText = 'Player 2';
}

//Function switchPlayer when round is finish

function switchPlayer() {
  currentScore = 0;
  activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;

  document.getElementById(`player${activePlayer}`).classList.toggle('active');
  document.getElementById('current-score0').innerText = 0;
  document.getElementById('current-score1').innerText = 0;
}

// Buttons event

// Roll button
roll.addEventListener('click', () => {
  if (gameActive) {
    let dice = randomDiceNumber();
    diceImage.src = `images/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-score${activePlayer}`).innerText = currentScore;
    } else {
      document.getElementById(`current-score${activePlayer}`).classList.remove('active');
      switchPlayer();
    }
  }
});

// Hold button
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

//New game button

newGame.addEventListener('click', displayGame);