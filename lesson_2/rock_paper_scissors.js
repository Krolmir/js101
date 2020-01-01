const readline = require('readline-sync');
const VALID_CHOICES = { r: 'rock',
                        p: 'paper',
                        sc: 'scissors',
                        l: 'lizard',
                        sp: 'spock' };

function clearScreen() {
  console.clear();
}

function computerWin(userChoice, computerChoice) {
  return isWinner(computerChoice, userChoice);
}

function displayChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}.`);
}

function displayChooseOne() {
  prompt(`Choose one`);
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
  prompt("That's not a valid choice");
}

function displayInvalidPlayAgain() {
  prompt('That is an invalid option.');
  prompt('Please enter "yes" or "no"):\n');
}

function displayPlayAgain() {
  displaySpacerMedium();
  prompt('Would you like to play again? (yes/no)');
  displaySpacerMedium();
}

function displayScoreBoard(playerWinTotal, computerWinTotal) {
  console.log('________________________');
  console.log('|');
  console.log(`|  Player 1 Score: ${playerWinTotal}`);
  console.log(`|  Computer Score: ${computerWinTotal}`);
  console.log('|_______________________\n');
}

function displaySpacerMedium() {
  console.log('-----------------------------------------');
}

function displayWinner(userChoice, computerChoice) {
  if (isWinner(userChoice, computerChoice)) {
    prompt('You win!');
  } else if (isWinner(computerChoice, userChoice)) {
    prompt('You lose.');
  } else {
    prompt("It's a tie");
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

while (true) {

  let playerTotal = 0;
  let computerTotal = 0;

  while (true) {

    displayChooseOne();
    for (const PROPERTY in VALID_CHOICES) {
      prompt(`"${PROPERTY}" for ${VALID_CHOICES[PROPERTY]}.`);
    }
    let userChoice = readline.question().toLowerCase();

    while (!Object.keys(VALID_CHOICES).includes(userChoice) &&
           !Object.values(VALID_CHOICES).includes(userChoice)) {
      displayInvalidChoice();
      userChoice = readline.question();
    }

    if (userChoice.length < 3) {
      userChoice = VALID_CHOICES[userChoice];
    }

    let randomIndex = Math.floor(Math.random() *
                      Object.values(VALID_CHOICES).length);
    let computerChoice = Object.values(VALID_CHOICES)[randomIndex];

    clearScreen();
    displaySpacerMedium();
    displayChoices(userChoice, computerChoice);
    displayWinner(userChoice, computerChoice);

    if (playerWin(userChoice, computerChoice)) {
      playerTotal += 1;
    } else if (computerWin(userChoice, computerChoice)) {
      computerTotal += 1;
    }

    displayScoreBoard(playerTotal, computerTotal);

    if (grandWinner(playerTotal) || grandWinner(computerTotal)) {
      break;
    }
  }

  displayGrandWinner(playerTotal);
  displayPlayAgain();

  let playAgain = readline.question().toLowerCase();

  while (playAgain !== 'no' && playAgain !== 'yes') {
    displayInvalidPlayAgain();
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain === 'no') {
    break;
  }
  clearScreen();
}