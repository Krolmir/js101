let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function capitalizeStrings(string) {
  return string[0].toUpperCase() +
         string.slice(1, string.length - 1).toLowerCase();
}

console.log(capitalizeStrings(munstersDescription));