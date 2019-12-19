const readline = require('readline-sync');
const MESSAGE = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function goAgain(yesOrNo) {
  if (yesOrNo === 'Y' || yesOrNo === 'y') {
    return true;
  } else {
    return false;
  }
}

function convertedOperation(operation) {
  if (operation === '1') {
    return '+';
  } else if (operation === '2') {
    return '-';
  } else if (operation === '3') {
    return 'x';
  } else {
    return '/';
  }
}

function invalidLanguage(language) {
  if (language === 'en') {
    return 'en';
  } else if (language === 'it') {
    return 'it';
  } else {
    return false;
  }
}

let doWeContinue = false;

prompt(MESSAGE['language']);
let language = readline.question().toLowerCase();

while (invalidLanguage(language) === false) {
  prompt(MESSAGE['invalidLanguage']);
  language = readline.question().toLowerCase();
}

prompt(MESSAGE[language]['welcome']);

do {
  prompt(MESSAGE[language]['firstNumberPrompt']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE[language]['invalidNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGE[language]['secondNumberPrompt']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE[language]['invalidNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGE[language]['operationPrompt']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGE[language]['invalidOperation']);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${number1} ${convertedOperation(operation)} ${number2} = ${output}`);
  prompt(MESSAGE[language]['continuePrompt']);
  doWeContinue = goAgain(readline.question());

} while (doWeContinue === true);