const readSync = require('readline-sync');
const MESSAGE = require('./mortgage_messages.json');

let decFormat = /^([0-9]{1,}){1}(\.[0-9]{1,})?$/;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isNotEmpty(string) {
  return string.trim() !== '';
}

function isPositive(number) {
  return Math.sign(number) === 1 || Math.sign(number) === 0;
}

function isValidLoanAmount(number) {
  return isValidFloat(number) && isPositive(number) && isNotEmpty(number);
}

function isValidFloat(number) {
  return decFormat.test(number);
}

function checkPercentage(number) {
  return number[0] === '%';
}

function isValidApr(number) {
  return isPositive(number) && isValidFloat(number);
}

function isValidLoanDuration(number) {
  return number > 0 && isValidFloat(number);
}

function adjustAprFormat(number) {
  return number.slice(1);
}

prompt(MESSAGE['spacer']);
prompt(MESSAGE['welcome']);

while (true) {
  prompt(MESSAGE['spacer']);
  prompt(MESSAGE['loanAmountPrompt']);

  let loanAmount = readSync.question();

  while (!isValidLoanAmount(loanAmount) || loanAmount < 1) {
    prompt(MESSAGE['invalidLoanAmountPrompt']);
    loanAmount = readSync.question();
  }

  prompt(MESSAGE['aprPrompt']);
  let annualPercentageRate = readSync.question();

  if (checkPercentage(annualPercentageRate)) {
    annualPercentageRate = adjustAprFormat(annualPercentageRate);
  }

  while (!isValidApr(annualPercentageRate)) {
    prompt(MESSAGE['aprInvalidPrompt']);
    annualPercentageRate = readSync.question();
    if (checkPercentage(annualPercentageRate)) {
      annualPercentageRate = adjustAprFormat(annualPercentageRate);
    }
  }

  prompt(MESSAGE['loanDurationPrompt']);
  let loanDuration = readSync.question();

  while (!isValidLoanDuration(loanDuration)) {
    prompt(MESSAGE['loanDurationInvalidPrompt']);
    loanDuration = readSync.question();
  }

  let annualInterestRate = Number(annualPercentageRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanDuration) * 12;
  let monthlyPayment = 0;
  console.log(annualPercentageRate !== '0');
  if (annualPercentageRate !== '0') {
    monthlyPayment = Number(loanAmount) *
                     (monthlyInterestRate /
                     (1 - Math.pow((1 +
                     monthlyInterestRate), (-Number(months)))));
  } else {
    monthlyPayment = Number(loanAmount) / months;
  }

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}\n`);
  prompt(MESSAGE['goAgain']);
  let userInput = readSync.question().toLowerCase();

  while (userInput !== 'yes' && userInput !== 'no') {
    prompt(MESSAGE['invalidRepeatAction']);
    userInput = readSync.question().toLowerCase();
  }

  if (userInput === 'no') break;
}