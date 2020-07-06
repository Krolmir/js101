// Write a function that creates a box and write a short line of text inside it

// box has to be 2 spaces longer than the text going in, excluding the front
// and back

// Going to create a loop that runs string.length +2 times to draw the box


function logInBox(string) {
  let lineSpacer = '';
  let emptySpace = '';
  for ( let i = 0; i < string.length; i++) {
    lineSpacer += '-';
    emptySpace += ' ';
  }
  console.log("+-" + lineSpacer + "-+");
  console.log('| ' + emptySpace + ' |');
  console.log('| ' + string + ' |');
  console.log('| ' + emptySpace + ' |');
  console.log("+-" + lineSpacer + "-+");
}


logInBox('To boldly go where no one has gone before.');
//will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+