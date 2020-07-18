// Problem: 

// Input: Array of Objects
// Output: Boolean

// Steps:

// initilize a transaction array and assign it to transactionsFor(id, transactions)
// Itterate over the return array with .forEAch and add up the quantity and check
// of movement is ever assigned to out. if it is return false


function isItemAvailable(id, array) {
  let status = true;

  let transaction = transactionsFor(id, array);
  let total = 0;
  transaction.forEach(object => {
    if (object.movement === 'out') {
      total -= object.quantity;
    } else {
      total += object.quantity;
    }
  });

  if (total <= 0) status = false;
  return status;
}

function transactionsFor(id, array) {
  return array.filter(object => id === object.id);

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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true