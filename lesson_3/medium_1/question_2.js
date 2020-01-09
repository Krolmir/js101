let munstersDescription = "The Munsters are creepy and spooky.";

function oppositeCharacters(string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index].toUpperCase() === string[index]) {
      newString += string[index].toLowerCase();
    } else {
      newString += string[index].toUpperCase();
    }
  }
  return newString;
}

console.log(oppositeCharacters(munstersDescription));
// Result: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`