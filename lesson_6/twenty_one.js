const readLineSync = require('readline-sync');
const CARDNUMBERS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♦', '♣'];
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

function spacerLarge() {
  console.log("--------------------------------------------------------------");
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
  prompt('Would you like to Hit or Stay?');
  prompt("Please enter 'h' or 'H' for hit and 's' or 'S' for stay:");
}
function displayInvalidHitOrStayPrompt() {
  emptyLine();
  console.log('That is not a valid option.');
  prompt("Please enter 'H' or 'h' for hit and 'S' or 's' for stay:");
}

function displayPlayerWins() {
  spacerMedium();
  prompt('You Win!');
  spacerMedium();
}

function displayTableIntro() {
  console.log('____________________________________');
  console.log('|                                  |');
  console.log('|      Welcome to Twenty One!      |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|  To start the game press enter:  |');
  console.log('|                                  |');
  console.log('|__________________________________|');
}

function displayTable(hidden = false) {
  console.clear();
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
  console.log('|                                  ');
  console.log('|                                  ');
  console.log(`|Player Total: ${playerTotal}`);
  console.log(`|    ${displayCardsOnTable(playerCards)}`);
  console.log('|                                  ');
  console.log('|__________________________________');
}

function displayTie() {
  spacerSmall();
  prompt('It\'s a Tie.');
  spacerSmall();
}

function displayTotals() {
  emptyLine();
  prompt(`Dealer has ${dealerTotal}`);
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
      total += Number.parseInt(card[0]);
    }
  });

  while ((total > 21) && (aceCounter > 0)) {
    total -= 10;
    aceCounter -= 1;
  };

  return total;
}

function checkBust(total) {
  return (total > 21);
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
  if (player > dealer) {
    return 'player';
  } else if (dealer > player) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function gameSetUp() {
  displayTableIntro();
  readLineSync.question();
  freshDeck = initializeDeck();
  shuffleCards(freshDeck);
  initialCardsDealt(freshDeck);
}

function initializeDeck() {
  let deck = [];

  CARDNUMBERS.forEach(number => {
    SUITS.forEach(suit => {
      deck.push([number, suit]);
    });
  });
  return deck;
}

function initialCardsDealt() {
  for (let i = 0; i < 2; i++) {
    dealACard(playerCards, freshDeck);
    dealACard(dealerCards, freshDeck);
  }
}

function isValid(input) {
  return ((input === 's') || (input === 'S') ||
          (input === 'h') || (input === 'H'));
}

function oneCardTotal(card) {
  switch(card[0][0]) {
    case 'A':
      return 11;
    case 'J':
      return 10;
    case 'Q':
      return 10;
    case 'K':
      return 10;
    default:
      return Number.parseInt(card[0][0]);
  }
}

function playerTurn() {
  dealACard(playerCards, freshDeck);
  playerTotal = calculateTotal(playerCards);
  displayTable(true);
}

function scoring() {
  displayTable();
  if (dealerTotal > 21) {
    displayBust('dealer');
  } else if (playerTotal > 21) {
   displayBust('player');
  } else {
    displayWinner(findWinner(playerTotal, dealerTotal));
  }
}

function shuffleCards(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

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
  };
}

while (true && !(checkBust(playerTotal))) {
  if (dealerTotal > 16) break;
  dealerTurn();
}

scoring();