let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newArray = [];
let keyArray = Object.keys(flintstones);
newArray.push(keyArray[2]);
newArray.push(flintstones.Barney);

console.log(newArray);