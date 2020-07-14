function doubleLoop(array) {
  return array.filter(arr => {
    return arr.reduce((a, b) => {
      return a + b;
    }) % 2 === 0;
  });
}

console.log(doubleLoop([[1,2,3], [2,3,4],[6,8]]));