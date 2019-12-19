const readSync = require('readline-sync');
const MESSAGE = require('./mortgage_messages.json');

let reAPR = /^([0-9]{1,2}){1}(\.[0-9]{1,4})?$/g;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isNotEmpty(string) {
  if (string.trim() !== '') {
    return true;
  } else {
    return false;
  }
}

function isPositive(number) {
  if (Math.sign(number) === 1) {
    return true;
  } else {
    return false;
  }
}

function isValidNumber(number) {
  if (Number.isInteger(Number(number)) === true) {
    return true;
  } else {
    return false;
  }
}

function isValidLoanAmount(number) {
  if (isValidNumber(number) && isPositive(number) && isNotEmpty(number)) {
    return true;
  } else {
    return false;
  }
}

function isValidFloat(number) {
  if (reAPR.test(number.slice(1)) === true) {
    return true;
  } else {
    return false;
  }
}
function isValidApr(number) {
  if (number[0] === '%' &&
      isValidFloat(number) === true &&
      isPositive(number.slice(1))) {
    return true;
  } else {
    return false;
  }
}

function isValidLoanDuration(number) {
  if (number >= 1 && number < 71 && isValidNumber(number)) {
    return true;
  } else {
    return false;
  }
}

function goAgain(input) {
  if (input === 'y' || input === 'Y') {
    return true;
  } else {
    return false;
  }
}

prompt(MESSAGE['welcome']);

do {
  prompt(MESSAGE['loanAmountPrompt']);
  let loanAmount = readSync.question();

  while (isValidLoanAmount(loanAmount) === false) {
    prompt(MESSAGE['invalidLoanAmountPrompt']);
    loanAmount = readSync.question();
  }

  prompt(MESSAGE['aprPrompt']);
  let annualPercentageRate = readSync.question();

  while (isValidApr(annualPercentageRate) === false) {
    prompt(MESSAGE['aprInvalidPrompt']);
    annualPercentageRate = readSync.question();
  }

  prompt(MESSAGE['loanDurationPrompt']);
  let loanDuration = readSync.question();

  while (isValidLoanDuration(loanDuration) === false) {
    prompt(MESSAGE['loanDurationInvalidPrompt']);
    loanDuration = readSync.question();
  }

  let annualInterestRate = Number(annualPercentageRate.slice(1)) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanDuration) * 12;
  let monthlyPayment = Number(loanAmount) *
                    (monthlyInterestRate /
                    (1 - Math.pow((1 +
                    monthlyInterestRate), (-Number(months)))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}\n`);
  prompt(MESSAGE['goAgain']);

} while (goAgain(readSync.question()) === true);