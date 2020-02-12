function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createUUID() {
  const VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let codeString = '';

  for (let i = 0; i < 35; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      codeString += '-';
    } else {
      codeString += VALUES[getRandomInt(VALUES.length)];
    }
  }
  return codeString;
}

console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
