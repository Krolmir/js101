// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// Set up a prompt for a user
let rsync = require('readline-sync');

console.log("Please enter the bill total:");
let bill = Number(rsync.question());

console.log("What is the tip percentage?");
let tip = rsync.question();

// formule for calculating tip
tip = ((tip / 100) * bill).toFixed(2);
bill = (Number(bill) + Number(tip));

console.log(`The tip is $${tip}`);
console.log(`The total is $${bill.toFixed(2)}`);