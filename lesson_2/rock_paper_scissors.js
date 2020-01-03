const readline = require('readline-sync');
const VALID_CHOICES = { r: 'rock',
                        p: 'paper',
                        sc: 'scissors',
                        l: 'lizard',
                        sp: 'spock' };

let userChoice = '';
let randomIndex = '';
let computerChoice = '';
let playerTotal = 0;
let computerTotal = 0;
let playAgain = '';

function clearScreen() {
  console.clear();
}

function computerWin(userChoice, computerChoice) {
  return isWinner(computerChoice, userChoice);
}

function displayChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}.`);
}

function displayGameWinner() {
  clearScreen();
  displaySpacerMedium();
  displayChoices(userChoice, computerChoice);
  displayWinnerMessage(userChoice, computerChoice);
}

function displayGrandWinner(playerWinTotal) {
  if (playerWinTotal === 5) {
    console.log('Congratulations!!! You are the winner in the race to 5 ' +
                'games.');
  } else {
    console.log('Sorry. The computer has won the race to 5 games. Better ' +
                'luck next time.');
  }
}

function displayInvalidChoice() {
  clearScreen();
  prompt("That's not a valid choice");
  displayOptions();
}

function displayOptions() {
  prompt(`Choose one`);
  for (const PROPERTY in VALID_CHOICES) {
    prompt(`"${PROPERTY}" for ${VALID_CHOICES[PROPERTY]}.`);
  }
  console.log('');
}

function getPlayAgain() {
  displayPlayAgainMessage();

  playAgain = readline.question().toLowerCase();

  while (playAgain !== 'no' && playAgain !== 'yes') {
    clearScreen();
    prompt('That is an invalid option.');
    displayPlayAgainMessage();
    playAgain = readline.question().toLowerCase();
  }
  clearScreen();
}

function displayPlayAgainMessage() {
  displaySpacerMedium();
  prompt('Would you like to play again? (yes/no)');
  displaySpacerMedium();
}

function displayScoreBoard(playerWinTotal, computerWinTotal) {
  console.log(' _____________________');
  console.log('|                     |');
  console.log(`|  Player 1 Score: ${playerWinTotal}  |`);
  console.log(`|  Computer Score: ${computerWinTotal}  |`);
  console.log('|_____________________|\n');
}

function displaySpacerLarge() {
  console.log('--------------------------------------------------------------');
}

function displaySpacerMedium() {
  console.log('-----------------------------------------');
}

function displayWelcomeMessage() {
  clearScreen();
  displaySpacerLarge();
  console.log('      Welcome to Rock Paper Scissors Lizard and Spock!');
  console.log('You will be playing against the computer in a race to 5 wins. ');
  console.log('                  GOODLUCK!!!!!!');
  displaySpacerLarge();
}
function displayWinnerMessage(userChoice, computerChoice) {
  if (isWinner(userChoice, computerChoice)) {
    prompt('You win!');
  } else if (isWinner(computerChoice, userChoice)) {
    prompt('You lose.');
  } else {
    prompt("It's a tie");
  }
}

function getComputerMove() {
  randomIndex = Math.floor(Math.random() *
                Object.values(VALID_CHOICES).length);
  computerChoice = Object.values(VALID_CHOICES)[randomIndex];
}

function getPlayerMove() {
  displayOptions();
  userChoice = readline.question().toLowerCase();

  while (!Object.keys(VALID_CHOICES).includes(userChoice) &&
        !Object.values(VALID_CHOICES).includes(userChoice)) {
    displayInvalidChoice();
    userChoice = readline.question();
  }

  if (userChoice.length < 3) {
    userChoice = VALID_CHOICES[userChoice];
  }
}

function grandWinner(total) {
  return total === 5;
}

function isWinner(choiceOne, choiceTwo) {
  return ((choiceOne === 'rock' &&
          (choiceTwo === 'scissors' || choiceTwo === 'lizard')) ||
          (choiceOne === 'paper' &&
          (choiceTwo === 'rock' || choiceTwo === 'spock')) ||
          (choiceOne === 'scissors' &&
          (choiceTwo === 'paper' || choiceTwo === 'lizard')) ||
          (choiceOne === 'lizard' &&
          (choiceTwo === 'spock' || choiceTwo === 'paper')) ||
          (choiceOne === 'spock' &&
          (choiceTwo === 'scissors' || choiceTwo === 'rock')));
}

function playerWin(userChoice, computerChoice) {
  return isWinner(userChoice, computerChoice);
}
function prompt(message) {
  console.log(`=> ${message}`);
}

function resetTotals() {
  playerTotal = 0;
  computerTotal = 0;
}

function updateScore() {
  if (playerWin(userChoice, computerChoice)) {
    playerTotal += 1;
  } else if (computerWin(userChoice, computerChoice)) {
    computerTotal += 1;
  }
}

while (true) {

  displayWelcomeMessage();
  resetTotals();

  while (true) {

    getPlayerMove();
    getComputerMove();
    displayGameWinner();
    updateScore();
    displayScoreBoard(playerTotal, computerTotal);

    if (grandWinner(playerTotal) || grandWinner(computerTotal)) {
      break;
    }
  }

  displayGrandWinner(playerTotal);
  getPlayAgain();

  if (playAgain === 'no') {
    break;
  }
}