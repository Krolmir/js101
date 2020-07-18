// Problem: Write a function that takes 2 arguments, inventory ID and transaction
//          and returns an array containing all transactions specified for that
//          item

// Rules:   Transactions is an array of objects that consists of 3 key value pairs

// Input: Number and Array
// Output: Array of objects

// Steps:

// Filter seems like it will be a good choice to use for our itteration
// initialize a result array and assign it to our filter itteration of transactions
// determine if argument id === to Id in object return true


function transactionsFor(id, array) {
  return array.filter(object => {
    return id === object.id;
  });
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]