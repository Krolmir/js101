// Problem: Write a mablib funciton that takes a template as an argument and
//          returns the mad lib with our WORDS const as a result

// Input: Some sort or template i will create
// Output: String

// Steps:

// Create the templates using the KEYS of our const as the empty spaces like so
let template1 = 'The adjectives brown nouns adverbs verbs the adjectives yellow' +
                ' nouns, who adverbs verbs his nouns and looks around.';
let template2 = 'The nouns verbs the nouns\'s nouns.';

// Create a constant will all our options
const WORDS = { adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                    nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                    adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
                    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'] }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Function will take our string template and we will continuously serch for
// the keys in our WORDS const and then break when we have noithing to swap
// initialzie a new string and assign it to our template since we dont want to
// mutate the original at this point
// search the string for any WORDS keys and replace them with our mathcing values
// .random

// itterate over WORDS .keys then assign a new regex to each key and replace

function madlibs(template) {
  let string = template;

  Object.keys(WORDS).forEach(word => {
    let regex = new RegExp(word);

    let newString;
    do {
      newString = string;
      string = string.replace(regex, WORDS[word][getRandomInt(WORDS[word].length)]);
    } while (newString !== string);

  });
  console.log(string);
}

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".