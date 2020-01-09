function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4 ) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isDotSeparatedIpAddress('10.123.54.43'));
console.log(isDotSeparatedIpAddress('10.123.54.434'));
console.log(isDotSeparatedIpAddress('10.54.43'));
console.log(isDotSeparatedIpAddress('10.123.54.43.23'));