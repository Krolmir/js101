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
const CARDNUMBERS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♦', '♣'];
let playerCards = [];
let dealerCards = [];
let freshDeck = [];

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

function displayTableInitialDeal() {
  console.log('____________________________________');
  console.log('|                                  |');
  console.log('|Dealer Total:                     |');
  console.log(`|    |${dealerCards[0].join('')}| |${dealerCards[1].join('')}|`);
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|                                  |');
  console.log('|Player Total:                     |');
  console.log(`|    |${playerCards[0].join('')}| |${playerCards[1].join('')}|`);
  console.log('|                                  |');
  console.log('|__________________________________|');
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

function dealACard(name, deck) {
  name.push(deck.pop());
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
displayTableInitialDeal();


console.log(playerCards);
console.log(dealerCards);




