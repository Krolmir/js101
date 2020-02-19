// Tic Tac Toe
// display a board using a function

const readSync = require('readline-sync');
const COMP_MARK = 'O';
const PLAYER_MARK = 'X';
const INITIAL_MARK = " ";
let boardArray = { 1: INITIAL_MARK,
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


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function prompt(msg = "") {
  console.log("=> " + msg);
}

function displayBoard(boardArr) {
  console.log('   |   |   ');
  console.log(' ' + boardArr[1] + ' | ' + boardArr[2] + ' | ' + boardArr[3] + '  ');
  console.log('___|___|___');
  console.log('   |   |   ');
  console.log(' ' + boardArr[4] + ' | ' + boardArr[5] + ' | ' + boardArr[6] + '  ');
  console.log('___|___|___');
  console.log('   |   |   ');
  console.log(' ' + boardArr[7] + ' | ' + boardArr[8] + ' | ' + boardArr[9] + '  ');
  console.log('   |   |   ');
}

function displayOptions() {
  console.log('1|2|3');
  console.log('4|5|6');
  console.log('7|8|9');
}

function displayWelcomeMessage() {
  prompt("Welcome to Tic Tac Toe!!")
  prompt("Rules are as follows: User puts an X, Computer puts an O.")
  prompt("Continues like this until someone matches 3 in a row or diagonally " +
         "or there are no more spaces");
}

function displayUserTurnMessage() {
  prompt("Please select a square based on the grid below:");
  displayOptions();
}

displayWelcomeMessage();
displayBoard(boardArray);

//Main Loop

while (true){
  displayUserTurnMessage();

  let userInput = readSync.question();

  // When a number is seleceted it needs to add an X towards the board.
  // Create an array that contains 1 threw
  // add the user input to the array. Check for validation
  //after the choice is made delete it from the remaining array

  //deleteing user selection from remaining spoots array
  let indexToDelete = remainingSpots.indexOf(parseInt(userInput));
  remainingSpots.splice(indexToDelete, 1);

  //player turn
  boardArray[userInput] = PLAYER_MARK;
  displayBoard(boardArray);

  //chbecking if remaingin spots is empty
  if (remainingSpots.length < 1) {
    break;
  }

  //computer turn
  let computerChoice = remainingSpots[getRandomInt(remainingSpots.length)];

  //deleteing computer selection from remaining spoots array
  indexToDelete = remainingSpots.indexOf(parseInt(computerChoice));
  remainingSpots.splice(indexToDelete, 1);

  boardArray[computerChoice] = COMP_MARK;
  displayBoard(boardArray);

  console.log(remainingSpots);

  //chbecking if remaingin spots is empty
  if (remainingSpots.length < 1) {
    break;
  }
}