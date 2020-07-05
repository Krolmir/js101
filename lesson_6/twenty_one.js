const readLineSync = require('readline-sync');
const CARD_NUMBERS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♦', '♣'];
const GAME_TOTAL = 21;
const WRITTEN_GAME_TOTAL = 'Twenty One';
const MAX_WINS = 5;
let playerWinTotal = 0;
let dealerWinTotal = 0;
let playerCards = [];
let dealerCards = [];
let freshDeck = [];
let playerTotal, dealerTotal;

function prompt(msg = "") {
  console.log("=> " + msg);
}

function emptyLine() {
  console.log(' ');
}

function spacerSmall() {
  console.log("----------------------------");
}

function spacerMedium() {
  console.log("----------------------------------------------------");
}

function displayBust(player) {
  emptyLine();
  spacerMedium();
  if (player === 'player') console.log('You have busted. Dealer Wins.');
  if (player === 'dealer') console.log('Dealer has busted. You Win!');
  spacerMedium();
  emptyLine();
}

function displayCardsOnTable(cards) {
  let string = '';

  cards.forEach(card => {
    string += `|${card.join('')}|`;
  });
  return string;
}

function displayDealerWins() {
  spacerSmall();
  prompt('Dealer Wins.');
  spacerSmall();
}

function displayHitOrStayPrompt() {
  emptyLine();
  prompt(`You total is currently ${playerTotal}.`);
  prompt('Would you like to Hit or Stay?');
  prompt("Please enter 'h' or 'H' for hit and 's' or 'S' for stay:");
}
function displayInvalidHitOrStayPrompt() {
  emptyLine();
  console.log('That is not a valid option.');
  prompt("Please enter 'H' or 'h' for hit and 'S' or 's' for stay:");
}

function displayMultipleGameWinner() {
  displayTable();
  emptyLine();
  spacerMedium();
  if (dealerWinTotal === MAX_WINS) {
    prompt(`The dealer has beaten you in the race to ${MAX_WINS} wins.`);
  } else {
    prompt(`You have won the race to ${MAX_WINS} wins.`);
  }
  spacerMedium();
}

function displayPlayAgain(invalid = false) {
  spacerMedium();
  if (invalid === false) prompt('Would you like to play again?');
  if (invalid === true) prompt('That is not a valid input.');
  prompt('Please enter \'Y\' or \'y\' for yes and \'N\' or \'n\' for no:');
  spacerMedium();
  emptyLine();
}

function displayPlayerWins() {
  spacerMedium();
  prompt('You Win!');
  spacerMedium();
}

function displayScoreBoard() {
  console.clear();
  console.log('____________________________________');
  console.log('|                                   |');
  console.log(`|      Score: Player: ${playerWinTotal}             |`);
  console.log(`|             Dealer: ${dealerWinTotal}             |`);
  console.log('|___________________________________|');
}

function displayTableIntro() {
  console.log('____________________________________');
  console.log('|                                  |');
  console.log(`|      Welcome to ${WRITTEN_GAME_TOTAL}`);
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|  To start the game press enter:  |');
  console.log('|                                  |');
  console.log('|__________________________________|');
}

function displayTable(hidden = false) {
  displayScoreBoard();
  console.log('____________________________________');
  console.log('|                                  ');
  if (hidden) {
    console.log(`|Dealer Total: ${oneCardTotal(dealerCards)}`);
    console.log(`|    |${dealerCards[0].join('')}|`);
  } else {
    console.log(`|Dealer Total: ${dealerTotal}`);
    console.log(`|    ${displayCardsOnTable(dealerCards)}`);
  }
  console.log('|                                  ');
  console.log(`|Player Total: ${playerTotal}`);
  console.log(`|    ${displayCardsOnTable(playerCards)}`);
  console.log('|__________________________________');
}

function displayTie() {
  spacerSmall();
  prompt('It\'s a Tie.');
  spacerSmall();
}

function displayTotals() {
  emptyLine();
  prompt(`Dealer has ${dealerTotal}.`);
  prompt(`You have ${playerTotal}.`);
}

function displayWinner(winner) {
  displayTotals();
  if (winner === 'player') {
    displayPlayerWins();
  } else if (winner === 'dealer') {
    displayDealerWins();
  } else {
    displayTie();
  }
}

function calculateInitialTotals() {
  playerTotal = calculateTotal(playerCards);
  dealerTotal = calculateTotal(dealerCards);
}

function calculateTotal(cards) {
  let total = 0;
  let aceCounter = 0;
  cards.forEach(card => {
    if (card[0] === 'A') {
      total += 11;
      aceCounter += 1;
    } else if ((card[0] === 'J' ) || (card[0] === 'Q') || (card[0] === 'K' )) {
      total += 10;
    } else {
      total += Number.parseInt(card[0], 10);
    }
  });

  while ((total > GAME_TOTAL) && (aceCounter > 0)) {
    total -= 10;
    aceCounter -= 1;
  }

  return total;
}

function calculateWinTotals() {
  let winner = findWinner(playerTotal, dealerTotal);
  if (winner === 'player') playerWinTotal += 1;
  if (winner === 'dealer') dealerWinTotal  += 1;
}

function checkBust(total) {
  return (total > GAME_TOTAL);
}

function dealACard(cards, deck) {
  cards.push(deck.pop());
}

function dealerTurn() {
  displayTable();
  emptyLine();
  readLineSync.question('Dealer will hit. Press enter to see their next card.');
  dealACard(dealerCards, freshDeck);
  dealerTotal = calculateTotal(dealerCards);
  displayTable();
}

function findWinner(player, dealer) {
  if (checkBust(player)) {
    return 'dealer';
  } else if (checkBust(dealer)) {
    return 'player';
  } else if (player > dealer) {
    return 'player';
  } else if (dealer > player) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function gameIntro() {
  console.clear();
  displayTableIntro();
  readLineSync.question();
}

function gameSetUp() {
  freshDeck = initializeDeck();
  shuffleCards(freshDeck);
  initialCardsDealt(freshDeck);
}

function initializeDeck() {
  let deck = [];

  CARD_NUMBERS.forEach(number => {
    SUITS.forEach(suit => {
      deck.push([number, suit]);
    });
  });
  return deck;
}

function initialCardsDealt() {
  for (let counter = 0; counter < 2; counter++) {
    dealACard(playerCards, freshDeck);
    dealACard(dealerCards, freshDeck);
  }
}

function isValid(input) {
  return ((input === 's') || (input === 'S') ||
          (input === 'h') || (input === 'H'));
}

function isValidYesOrNo(input) {
  return ['y', 'Y', 'n', 'N'].includes(input);
}

function nextGame() {
  spacerMedium();
  prompt('Hit enter to go to the next game.');
  spacerMedium();
  readLineSync.question();
}

function oneCardTotal(card) {
  switch (card[0][0]) {
    case 'A':
      return 11;
    case 'J':
      return 10;
    case 'Q':
      return 10;
    case 'K':
      return 10;
    default:
      return Number.parseInt(card[0][0], 10);
  }
}

function playAgain(input) {
  return ['y', 'Y'].includes(input);
}

function playAgainPrompt() {
  displayPlayAgain();
  let input = readLineSync.question();

  while (!isValidYesOrNo(input)) {
    displayPlayAgain(true);
    input = readLineSync.question();
  }
  return input;
}

function playerTurn() {
  dealACard(playerCards, freshDeck);
  playerTotal = calculateTotal(playerCards);

  displayTable(true);
}

function resetGame() {
  playerCards = [];
  dealerCards = [];
  playerTotal = 0;
  dealerTotal = 0;
}

function resetGameFull() {
  playerWinTotal = 0;
  dealerWinTotal = 0;
}

function scoring() {
  if (dealerTotal > GAME_TOTAL) {
    displayTable();
    displayBust('dealer');
  } else if (playerTotal > GAME_TOTAL) {
    displayTable(true);
    displayBust('player');
  } else {
    displayTable();
    displayWinner(findWinner(playerTotal, dealerTotal));
  }
}

function shuffleCards(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

gameIntro();

while (true) {
  gameSetUp();
  calculateInitialTotals();

  displayTable(true);

  while (true) {
    displayHitOrStayPrompt();
    let input = readLineSync.question();

    while (!isValid(input)) {
      displayInvalidHitOrStayPrompt();
      input = readLineSync.question();
    }

    if ((input === 's') || (input === 'S')) break;

    playerTurn();
    if (checkBust(playerTotal)) {
      displayBust();
      break;
    }
  }

  while (true && !(checkBust(playerTotal))) {
    if (dealerTotal > GAME_TOTAL - 5) break;
    dealerTurn();
  }

  scoring();
  calculateWinTotals();
  if ((playerWinTotal === MAX_WINS) || (dealerWinTotal === MAX_WINS)) {
    displayMultipleGameWinner();
    let playAgainInput = playAgainPrompt();
    if (!playAgain(playAgainInput)) break;
    resetGameFull();
  }
  nextGame();
  resetGame();
}