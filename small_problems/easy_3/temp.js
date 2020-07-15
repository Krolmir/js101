let argument = 'Hi';

function testScope(test) {
  argument = 'hello';
}

console.log(argument);
testScope('test');
console.log(argument);