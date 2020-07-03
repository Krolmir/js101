// Greet and welcome the Player

// 1. Initialize deck
//  Shuffle Deck

// 2. Deal cards to player and dealer
// iniatlize 2 arrays: Player cards. Dealer cards.
// Pop the first card give it to the player, pop second card to dealer
//

// 3. Player turn: hit or stay
//   - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//   - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

// Create a deck of cards

const readLineSync = require('readline-sync');
const CARDNUMBERS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'A', 'A', 'A'];
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

function displayTable() {
  console.log('____________________________________');
  console.log('|                                  ');
  console.log('|Dealer Total:                     ');
  console.log(`|    |${dealerCards[0].join('')}| |${dealerCards[1].join('')}|`);
  console.log('|                                  ');
  console.log('|                                  ');
  console.log('|                                  ');
  console.log(`|Player Total: ${playerTotal}  `);
  console.log(`|    ${displayCardsOnTable(playerCards)}`);
  console.log('|                                  ');
  console.log('|__________________________________');
}

function displayCardsOnTable(cards) {
  let string = '';

  cards.forEach(card => {
    string += `|${card.join('')}|`;
  });
  return string;
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

function dealACard(cards, deck) {
  cards.push(deck.pop());
}

function shuffleCards(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
}

displayTableIntro();
readLineSync.question();
console.clear();

freshDeck = initializeDeck();
shuffleCards(freshDeck);
initialCardsDealt(freshDeck);
playerTotal = calculateTotal(playerCards);
displayTable();

while (true) {
  displayHitOrStayPrompt();
  let input = readLineSync.question();
  while (!isValid(input)) {
    console.log('That is not a valid option.');
    prompt("Please enter 'H' or 'h' for hit and 'S' or 's' for stay:");
  input = readLineSync.question();
  }

  if ((input === 's') || (input === 'S')) break;

  dealACard(playerCards, freshDeck);
  playerTotal = calculateTotal(playerCards);
  displayTable();
}

function isValid(input) {
  return ((input === 's') || (input === 'S') ||
          (input === 'h') || (input === 'H'));
}

function displayHitOrStayPrompt() {
  emptyLine();
  prompt('Would you like to Hit or Stay?');
  prompt("Please enter 'h' or 'H' for hit and 's' or 'S' for stay:");
}