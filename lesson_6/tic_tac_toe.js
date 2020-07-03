const readSync = require('readline-sync');
const COMP_MARK = 'O';
const PLAYER_MARK = 'X';
const INITIAL_MARK = ' ';
const GAME_TOTAL = 5;
const HIGHRISKSQUARES = {
  1: [[2, 3], [4, 7], [5, 9]],
  2: [[1, 3], [5, 8]],
  3: [[1, 2], [5, 7], [6, 9]],
  4: [[1, 7], [5, 6]],
  5: [[1, 9], [2, 8], [3, 7], [4, 6]],
  6: [[3, 9], [4, 5]],
  7: [[1, 4], [8, 9], [3, 5]],
  8: [[2, 5], [7, 9]],
  9: [[1, 5], [7, 8], [3, 6]]
};
let remainingSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let indexToDelete = '';
let firstToAct, alternate, currentPlayer;
let scoreBoard = initializeScoreBoard();

function emptyLine() {
  console.log(' ');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function prompt(msg = "") {
  console.log("=> " + msg);
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

function displayScoreBoard(scoreBoard) {
  console.log("Player Wins: " + scoreBoard[0]);
  console.log("Computer Wins: " + scoreBoard[1]);
  console.log("Ties: " + scoreBoard[2]);
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

function displayEnterToContinue() {
  readSync.question(prompt("Press Enter to continue..."));
  console.clear();
}

function displayGrandWinner() {
  if (playerGrandWinner(scoreBoard)) {
    displayGrandWinnerPlayer();
   } else {
    displayGrandWinnerComputer();
  }
}

function displayGrandWinnerComputer() {
  spacerLarge();
  console.log("Sorry but the computer has bested you in the race to " +
              GAME_TOTAL + " wins. They are the Grand Winner.");
}

function displayGrandWinnerPlayer() {
  spacerLarge();
  console.log("Cogragualtions you are the Grand Winner in the race to " +
              GAME_TOTAL + " wins!!!");
}

function displayInvalidInput(boardObject) {
  console.clear();
  displayScoreBoard(scoreBoard);
  displayBoard(boardObject);
  console.log("Invalid Input. Please select one of the available options below:");
  displayRemainingOptions();
  displayOptions(boardObject);
}

function displayInvalidWhoGoesFirst() {
  console.log("That is not a valid choice.");
  prompt("Please enter 'F' or 'f' for first and 'S' or 's' for second:");
}

function displayInvalidYN() {
  console.log("That is not a valid choice.");
  displayYesNoPrompt();
}

function displayOptions(board) {
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

function displayPlayAgain() {
  spacerLarge();
  prompt("Would you like to play again?");
  displayYesNoPrompt();
 spacerLarge();
}

function displayRules() {
  prompt("Rules are as follows:");
  console.log("  1. TicTacToe is a 2 player game with Player1 being 'X' and " +
              "Player2 also known as the Computer being 'O'.");
  console.log("  2. Each player takes turns marking spaces in a 3x3 grid.");
  console.log("  3. The player who succeeds in placing three of their marks" +
              " in a horizontal, vertical, or diagonal row is the winner.");
  console.log(`  4. In our version of the game it is first to ${GAME_TOTAL} ` +
              `wins to claim GrandWinner!.`);
}

function displayAlternateMessage() {
  prompt("Would you like to alternate who goes first after every game?");
  displayYesNoPrompt();
}

function displayUserTurn(boardObject) {
  displayBoard(boardObject);
  prompt("Please input a number based on the remaining squares below:");
  displayRemainingOptions();
  displayOptions(boardObject);
}

function displayRemainingOptions() {
  if (remainingSpots.length === 1) {
    console.log("Remaining Options: " + remainingSpots);
  } else {
    console.log("Remaining Options: " + joinOr(remainingSpots, ', ', 'or'));
  }
}

function displayTie(boardObject) {
  displayBoard(boardObject);
  console.log("It's a tie.");
  displayEnterToContinue();
}

function displayWinner(user, boardObject) {
  displayBoard(boardObject);
  if (user === PLAYER_MARK) {
    console.log('You have Won!');
  } else if (user === COMP_MARK) {
    console.log('The Computer has won!');
  }
  displayEnterToContinue();
}

function displayWelcomeMessage() {
  console.clear();
  spacerSmall();
  prompt("Welcome to Tic Tac Toe!!");
  spacerSmall();
  displayRules();
  spacerLarge();
  displayEnterToContinue();
}

function displayWhoGoesFirstMessage() {
  prompt("Would you like to be the first to choose your square or second?");
  prompt("Please enter 'F' or 'f' for first and 'S' or 's' for second:");
}

function displayYesNoPrompt() {
  prompt("Please enter 'Y' or 'y' for Yes and 'N' or 'n' for No:");
}

function boardFull() {
  return (remainingSpots.length < 1);
}

function checkHorizontal(mark, board) {
  return ((board[1] === mark && board[2] === mark && board[3] === mark) ||
          (board[4] === mark && board[5] === mark && board[6] === mark) ||
          (board[7] === mark && board[8] === mark && board[9] === mark));
}

function checkVertical(mark, board) {
  return ((board[1] === mark && board[4] === mark && board[7] === mark) ||
          (board[2] === mark && board[5] === mark && board[8] === mark) ||
          (board[3] === mark && board[6] === mark && board[9] === mark));
}

function checkDiaganal(mark, board) {
  return ((board[1] === mark && board[5] === mark && board[9] === mark) ||
          (board[3] === mark && board[5] === mark && board[7] === mark));
}

function checkWinner(mark, board) {
  return (checkHorizontal(mark, board) || checkVertical(mark, board) ||
          checkDiaganal(mark, board));
}

function chooseSquare(board) {
  if (currentPlayer === 'Player') {
    playerTurn(board);
    currentPlayer = 'Computer';
  } else {
    computerTurn(board);
    currentPlayer = 'Player';
  }
}

function computerTurn(boardObject) {
  let computerChoice;
  if (getHighRiskSquare(boardObject, COMP_MARK) !== 0) {
    computerChoice = getHighRiskSquare(boardObject, COMP_MARK);
  } else if (getHighRiskSquare(boardObject, PLAYER_MARK) !== 0) {
    computerChoice = getHighRiskSquare(boardObject, PLAYER_MARK);
  } else if (boardObject[5] === ' ') {
    computerChoice = 5;
  } else {
    computerChoice = remainingSpots[getRandomInt(remainingSpots.length)];
  }

  updateRemainingSpotsBoard(computerChoice);
  updateBoard(boardObject, computerChoice, COMP_MARK);
}

function getAlternatePlayers() {
  spacerSmall();
  displayAlternateMessage();
  let input = readSync.question();
  while (!isValidYN(input)) {
    displayInvalidYN();
    input = readSync.question();
  }

  console.clear();
  if (input === 'y' || input === 'Y') {
    alternate = 'on';
  } else if (input === 'n' || input === 'N') {
    alternate = 'off';
  }
}

function getHighRiskSquare(board, mark) {
  let keys =  Object.keys(HIGHRISKSQUARES);
  let highRisk = 0;

  keys.forEach(key => {
    HIGHRISKSQUARES[key].forEach(pair => {
      if (
        board[pair[0]] === mark &&
        board[pair[1]] === mark &&
        board[Number(key)] === ' '
        ) {
          highRisk = Number(key);
        }
    });
  });
  return highRisk;
}

function getWhoGoesFirst() {
  console.clear();
  spacerSmall();
  displayWhoGoesFirstMessage();
  let input = readSync.question();
  while (!isValidWhoGoesFirst(input)) {
    displayInvalidWhoGoesFirst();
    input = readSync.question();
  }

  if (input === 'f' || input === 'F') {
    firstToAct = 'Player';
    currentPlayer = 'Player';
  } else if (input === 's' || input === 'S') {
    firstToAct = 'Computer';
    currentPlayer = 'Computer';
  }
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARK;
  }

  return board;
}

function initializeScoreBoard() {
  let scoreBoard = [0, 0, 0];

  return scoreBoard;
}

function inputValid(userInput) {
  return ((remainingSpots.includes(parseFloat(userInput, 10))) &&
          (userInput.length < 2));
}

function isGrandWinner(scoreBoard) {
  return (scoreBoard[0] === GAME_TOTAL || scoreBoard[1] === GAME_TOTAL);
}

function isValidYN(input) {
  return (input === 'y' || input === 'Y' || input === 'n' || input === 'N');
}

function isValidWhoGoesFirst(input) {
  return (input === 'f' || input === 'F' || input === 's' || input === 'S');
}

function joinOr(array, seperator, word) {
  return (array.slice(0, array.length - 1).join(seperator) + " " + word + " " +
          array.slice(array.length - 1));
}

function playAgain() {
  let input = readSync.question();
  while (!isValidYN(input)) {
    displayInvalidYN();
    input = readSync.question();
  }

  if (input === 'n' || input === 'N') {
    return false;
  } else {
    return true;
  }
}

function playerGrandWinner(scoreBoard) {
  return (scoreBoard[0] === GAME_TOTAL);
}

function playerTurn(boardObject) {
  displayUserTurn(boardObject);
  let userInput = readSync.question();

  while (!inputValid(userInput)) {
    displayInvalidInput(boardObject);
    userInput = readSync.question();
  }

  updateRemainingSpotsBoard(userInput);
  updateBoard(boardObject, userInput, PLAYER_MARK);
}

function populateDisplayOptions(value, num) {
  if (value === INITIAL_MARK) {
    return num;
  } else {
    return ' ';
  }
}

function resetGame() {
  scoreBoard = initializeScoreBoard();
  setUpGame();
}

function resetRemainingSpots() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function setUpGame() {
  getWhoGoesFirst();
  getAlternatePlayers();
}

function someoneWon(board) {
  return ((checkWinner(PLAYER_MARK, board)) || (checkWinner(COMP_MARK, board)));
}

function swapWhoGoesFirst() {
  if (alternate === 'on' && firstToAct === 'Player') {
    firstToAct = 'Computer';
    currentPlayer = 'Computer';
  } else if (alternate === 'on' && firstToAct === 'Computer') {
    firstToAct = 'Player';
    currentPlayer = 'Player';
  } else if (alternate === 'off' && firstToAct === 'Computer') {
    currentPlayer = 'Computer';
  }  else if (alternate === 'off' && firstToAct === 'Player') {
    currentPlayer = 'Player';
  }
}

function updateBoard(board, input, mark) {
  if (mark === PLAYER_MARK) {
    board[input] = PLAYER_MARK;
  } else {
    board[input] = COMP_MARK;
  }
}

function updateRemainingSpotsBoard(input) {
  indexToDelete = remainingSpots.indexOf(parseInt(input, 10));
  remainingSpots.splice(indexToDelete, 1);
  console.clear();
}

function updateScore(num, scoreBoard) {
  if (num === 1) {
    scoreBoard[0] += 1;
  } else if (num === -1) {
    scoreBoard[1] += 1;
  } else if (num === 0) {
    scoreBoard[2] += 1;
  }
}

function updateWhenBoardFull(board) {
  updateScore(0, scoreBoard);
  displayScoreBoard(scoreBoard);
  displayTie(board, scoreBoard);
  swapWhoGoesFirst();
}

function winnerFoundGameReset(board) {
  checkWinner(PLAYER_MARK, board) ?
  updateScoreWinnerFound(1, PLAYER_MARK, board) :
  updateScoreWinnerFound(-1, COMP_MARK, board);
}

function updateScoreWinnerFound(number, mark, board) {
  updateScore(number, scoreBoard);
  displayScoreBoard(scoreBoard);
  displayWinner(mark, board);
  swapWhoGoesFirst();
}

displayWelcomeMessage();
setUpGame();
while (true) {
  let boardObject = initializeBoard();

  while (true) {
    displayScoreBoard(scoreBoard);
    chooseSquare(boardObject);
    if (someoneWon(boardObject)) {
      winnerFoundGameReset(boardObject);
      break;
    }

    if (boardFull()) {
      updateWhenBoardFull(boardObject);
      break;
    }
  }

  if (isGrandWinner(scoreBoard)) {
    displayGrandWinner();
    displayPlayAgain();
    if (!playAgain()) break;
    resetGame();
  }

  remainingSpots = resetRemainingSpots();
}