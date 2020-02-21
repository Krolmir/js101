// Tic Tac Toe
// display a board using a function

const readSync = require('readline-sync');
const COMP_MARK = 'O';
const PLAYER_MARK = 'X';
const INITIAL_MARK = " ";
let boardObject = { 1: INITIAL_MARK,
                    2: INITIAL_MARK,
                    3: INITIAL_MARK,
                    4: INITIAL_MARK,
                    5: INITIAL_MARK,
                    6: INITIAL_MARK,
                    7: INITIAL_MARK,
                    8: INITIAL_MARK,
                    9: INITIAL_MARK,
}
let remainingSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkHorizontal(mark, board) {
  return (board[1] === mark && board[2] === mark && board[3] === mark ||
          board[4] === mark && board[5] === mark && board[6] === mark ||
          board[7] === mark && board[8] === mark && board[9] === mark);
}

function checkVertical(mark, board) {
  return (board[1] === mark && board[4] === mark && board[7] === mark ||
          board[2] === mark && board[5] === mark && board[8] === mark ||
          board[3] === mark && board[6] === mark && board[9] === mark);
}

function checkDiaganal(mark, board) {
  return (board[1] === mark && board[5] === mark && board[9] === mark ||
          board[3] === mark && board[5] === mark && board[7] === mark);
}

function checkWinner(mark, board) {
  if (checkHorizontal(mark, board) ||
      checkVertical(mark, board) ||
      checkDiaganal(mark, board)){
    console.log('We have a winner');
  }
}

function emptyLine() {
  console.log(' ');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function prompt(msg = "") {
  console.log("=> " + msg);
}

function displayRemainingOptions() {
  console.log("Remaining Options: " + remainingSpots.join(', '));
}

function displayBoard(board) {
  emptyLine();
  console.log('                  |   |   ');
  console.log('                ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '  ');
  console.log('               ___|___|___');
  console.log('                  |   |   ');
  console.log('                ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '  ');
  console.log('               ___|___|___');
  console.log('                  |   |   ');
  console.log('                ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '  ');
  console.log('                  |   |   ');
  emptyLine();
  spacerMedium();
}

function populateDisplayOptions(value, num) {
  if (value === INITIAL_MARK) {
    return num
  } else {
    return ' ';
  }
}

function displayOptions(board) {
  emptyLine();
  console.log('                  |   |   ');
  console.log('                ' +
              populateDisplayOptions(board[1], 1) + ' | ' +
              populateDisplayOptions(board[2], 2) + ' | ' +
              populateDisplayOptions(board[3], 3));
  console.log('               ___|___|___');
  console.log('                  |   |   ');
  console.log('                ' +
              populateDisplayOptions(board[4], 4) + ' | ' +
              populateDisplayOptions(board[5], 5) + ' | ' +
              populateDisplayOptions(board[6], 6));
  console.log('               ___|___|___');
  console.log('                  |   |   ');
  console.log('                ' +
              populateDisplayOptions(board[7], 7) + ' | ' +
              populateDisplayOptions(board[8], 8) + ' | ' +
              populateDisplayOptions(board[9], 9));
  console.log('                  |   |   ');

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

function displayWelcomeMessage() {
  console.clear();
  spacerSmall();
  prompt("Welcome to Tic Tac Toe!!")
  spacerSmall();
  prompt("Rules are as follows:")
  console.log("    - 2 player game with Yourself being 'X' and Computer " +
              "being'O'");
  console.log("    - Each player takes turns marking spaces in a 3x3 grid");
  console.log("    - The player who succeeds in placing three of their marks "+
              "in a horizontal, vertical, or diagonal row is the winner");
  spacerLarge();
  readSync.question(prompt("Press Enter to continue..."));
  console.clear();
}

function displayUserTurnMessage() {
  prompt("Please input a number based on the remaining squares below:");
  displayRemainingOptions();
  displayOptions(boardObject);
}

displayWelcomeMessage();
displayBoard(boardObject);

//Main Loop

while (true){
  displayUserTurnMessage();

  let userInput = readSync.question();

  // User input Validation
  while (!remainingSpots.includes(parseInt(userInput))) {
    console.log("Invalid Input. Please select one of the available options below:");
    displayRemainingOptions()
    displayOptions(boardObject);
    userInput = readSync.question();
  }

  //deleteing user selection from remaining spoots array
  let indexToDelete = remainingSpots.indexOf(parseInt(userInput));
  remainingSpots.splice(indexToDelete, 1);
  console.clear();

  //player turn
  boardObject[userInput] = PLAYER_MARK;

  //chbecking if remaingin spots is empty
  if (remainingSpots.length < 1) {
    break;
  }

  //computer turn
  let computerChoice = remainingSpots[getRandomInt(remainingSpots.length)];

  //deleteing computer selection from remaining spoots array
  indexToDelete = remainingSpots.indexOf(parseInt(computerChoice));
  remainingSpots.splice(indexToDelete, 1);

  boardObject[computerChoice] = COMP_MARK;
  displayBoard(boardObject);

  checkWinner(PLAYER_MARK, boardObject);
  checkWinner(COMP_MARK, boardObject);

  //chbecking if remaingin spots is empty
  if (remainingSpots.length < 1) {
    break;
  }
}