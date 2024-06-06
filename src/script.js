'use strict';

let computedSecretNum = Math.trunc(Math.random() * 20) + 1;
console.log(computedSecretNum);
let playerScore = 20;
let playerHighscore = 0;

const screen = document.querySelector('body');
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const secretNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');

const displayMessage = m => (message.textContent = m);
const displayScore = s => (score.textContent = s);

btnCheck.addEventListener('click', () => {
  if (!guess.value) displayMessage('❌ No Number!');
  else if (Number(guess.value) === computedSecretNum) {
    displayMessage('🎉 Correct Number!');
    highScore.textContent = playerScore;
    secretNumber.textContent = computedSecretNum;
    screen.classList.remove('bg-zinc-900');
    screen.classList.add('bg-green-600');
  } else if (Number(guess.value) !== computedSecretNum) {
    if (playerScore > 1) {
      displayMessage(Number(guess.value) > computedSecretNum ? '📈 Too High! ' : '📉 Too Low! ');
      --playerScore;
      displayScore(playerScore);
    } else if (playerScore === 1) {
      displayMessage('You lost the game!');
      --playerScore;
      displayScore(playerScore);
      secretNumber.textContent = computedSecretNum;
      screen.classList.remove('bg-zinc-900');
      screen.classList.add('bg-red-600');
    }
  }
});

btnAgain.addEventListener('click', () => {
  computedSecretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(computedSecretNum);
  displayMessage('Start guessing...');
  screen.classList.remove('bg-red-600');
  screen.classList.remove('bg-green-600');
  screen.classList.add('bg-zinc-900');
  secretNumber.textContent = '?';
  guess.value = '';
  playerHighscore = playerScore;
  highScore.textContent = playerHighscore;
  playerScore = 20;
  score.textContent = playerScore;
});
