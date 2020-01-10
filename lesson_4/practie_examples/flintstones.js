let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Create a program that turns the above array into the below object.
// Array to Object
// A -
//  itterate over the array with a loop so i can have access to an index variable
//  save the name as the key and save the index as the value


function arrayToObject(array) {
  let resultObject = {};
  array.forEach((element, index) => {
    resultObject[element] = index;
  });
  return resultObject;
}

console.log(arrayToObject(flintstones));
// Result ={ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }