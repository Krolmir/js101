// Create a madlib program that prompts the user for a noun, a verb, an adverb,
// and an adjective.  Then injects them into a story

// Example Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// input: 4 strings
// output: madlib story with our 4 strings injected.
let readLineSync = require('readline-sync');
let noun, verb, adjective, adverb;

function madLibs(noun, verb, adjective, adverb) {
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`)
}

noun = readLineSync.question('Enter a noun: ');
verb = readLineSync.question('Enter a verb: ');
adjective = readLineSync.question('Enter an adjective: ');
adverb = readLineSync.question('Enter an adverb: ');

madLibs(noun, verb, adjective, adverb);