const MESSAGES = require('./twenty_one.json');
const readLineSync = require('readline-sync');
const CARD_NUMBERS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['♠', '♥', '♦', '♣'];
const GAME_TOTAL = 21;
const WRITTEN_GAME_TOTAL = 'Twenty One';
const MAX_WINS = 5;
let playerCards = [];
let dealerCards = [];
let freshDeck = [];
let playerTotal, dealerTotal;
let score = {player: 0, dealer: 0};

function prompt(msg = "") {
  console.log("=> " + msg);
}

function emptyLine() {
  console.log(' ');
}

function spacerSmall() {
  console.log(MESSAGES.spacerSmall);
}

function spacerMedium() {
  console.log(MESSAGES.spacerMedium);
}

function displayBust(player) {
  emptyLine();
  spacerMedium();
  if (player === 'player') console.log(MESSAGES.youBust);
  if (player === 'dealer') console.log(MESSAGES.dealerBust);
  spacerMedium();
  emptyLine();
}

function displayCardsOnTable(cards) {
  let string = '';

  cards.forEach(card => {
    string += `|${card.value + card.suit}|`;
  });
  return string;
}

function displayDealerWins() {
  spacerSmall();
  prompt(MESSAGES.dealerWin);
  spacerSmall();
}

function displayHitOrStayPrompt() {
  emptyLine();
  prompt(`You total is currently ${playerTotal}.`);
  prompt(MESSAGES.hitOrStay);
  prompt(MESSAGES.hitOrStayPrompt);
}
function displayInvalidHitOrStayPrompt() {
  emptyLine();
  console.log(MESSAGES.notValid);
  prompt(MESSAGES.hitOrStayPrompt);
}

function displayMultipleGameWinner() {
  displayTable();
  emptyLine();
  spacerMedium();
  if (score.dealer === MAX_WINS) {
    prompt(`The dealer has beaten you in the race to ${MAX_WINS} wins.`);
  } else {
    prompt(`You have won the race to ${MAX_WINS} wins.`);
  }
  spacerMedium();
}

function displayPlayAgain(invalid = false) {
  spacerMedium();
  if (invalid === false) prompt(MESSAGES.playAgain);
  if (invalid === true) prompt(MESSAGES.notValid);
  prompt(MESSAGES.yesOrNoPrompt);
  spacerMedium();
  emptyLine();
}

function displayPlayerHasMax() {
  spacerMedium();
  prompt(MESSAGES.playerHasMax);
  spacerMedium();
  readLineSync.question();
}

function displayPlayerWins() {
  spacerMedium();
  prompt(MESSAGES.youWin);
  spacerMedium();
}

function displayScoreBoard() {
  console.clear();
  console.log('____________________________________');
  console.log('|                                   |');
  console.log(`|      Score: Player: ${score.player}             |`);
  console.log(`|             Dealer: ${score.dealer}             |`);
  console.log('|___________________________________|');
}

function displayTableIntro() {
  console.log('____________________________________');
  console.log('|                                  |');
  console.log(`|      Welcome to ${WRITTEN_GAME_TOTAL}`);
  console.log('|                                  |');
  console.log(`|  The game is first to ${MAX_WINS} wins.`);
  console.log(`|        ${MESSAGES.intro}          |`);
  console.log('|                                  |');
  console.log(`|  ${MESSAGES.startGamePrompt}  |`);
  console.log('|                                  |');
  console.log('|__________________________________|');
}

function displayTable(hidden = false) {
  displayScoreBoard();
  console.log('____________________________________');
  console.log('|                                  ');
  if (hidden) {
    console.log(`|Dealer Total: ${oneCardTotal(dealerCards)}`);
    console.log(`|    |${dealerCards[0].value + dealerCards[0].suit}|`);
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
  prompt(MESSAGES.tie);
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

function calculateInitialTotals(playerCards, dealerCards) {
  playerTotal = calculateTotal(playerCards);
  dealerTotal = calculateTotal(dealerCards);
}

function calculateTotal(cards) {
  let total = 0;
  let aceCounter = 0;
  cards.forEach(card => {
    if (card.value === 'A') {
      total += 11;
      aceCounter += 1;
    } else if ((card.value === 'J' ) || (card.value === 'Q') || (card.value === 'K' )) {
      total += 10;
    } else {
      total += Number.parseInt(card.value, 10);
    }
  });

  while ((total > GAME_TOTAL) && (aceCounter > 0)) {
    total -= 10;
    aceCounter -= 1;
  }

  return total;
}

function calculateWinTotals(score) {
  let winner = findWinner(playerTotal, dealerTotal);
  if (winner === 'player') score.player += 1;
  if (winner === 'dealer') score.dealer  += 1;
}

function checkBust(total) {
  return (total > GAME_TOTAL);
}

function dealACard(cards, deck) {
  cards.push(deck.pop());
}

function dealerTurn(dealerCards) {
  displayTable();
  emptyLine();
  readLineSync.question(MESSAGES.dealerHit);
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
    SUITS.forEach(suits => {
      deck.push({value: number, suit: suits});
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
  prompt(MESSAGES.nextGame);
  spacerMedium();
  readLineSync.question();
}

function oneCardTotal(card) {
  switch (card[0].value) {
    case 'A':
      return 11;
    case 'J':
      return 10;
    case 'Q':
      return 10;
    case 'K':
      return 10;
    default:
      return Number.parseInt(card[0].value, 10);
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

function playerTurn(playerCards) {
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

function resetGameFull(score) {
  score.player = 0;
  score.dealer = 0;
}

function scoring(playerTotal, dealerTotal) {
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
  calculateInitialTotals(playerCards, dealerCards);

  displayTable(true);

  while (true) {
    if (playerTotal === GAME_TOTAL) {
      displayPlayerHasMax();
      break;
    }

    displayHitOrStayPrompt();
    let input = readLineSync.question();

    while (!isValid(input)) {
      displayInvalidHitOrStayPrompt();
      input = readLineSync.question();
    }

    if ((input === 's') || (input === 'S')) break;

    playerTurn(playerCards);
    if (checkBust(playerTotal)) {
      displayBust();
      break;
    }
  }

  while (true && !(checkBust(playerTotal))) {
    if (dealerTotal > GAME_TOTAL - 5) break;
    dealerTurn(dealerCards);
  }

  scoring(playerTotal, dealerTotal);
  calculateWinTotals(score);
  if ((score.player === MAX_WINS) || (score.dealer === MAX_WINS)) {
    displayMultipleGameWinner();
    let playAgainInput = playAgainPrompt();
    if (!playAgain(playAgainInput)) break;
    resetGameFull(score);
  }
  nextGame();
  resetGame();
}