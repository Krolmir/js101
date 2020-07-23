// Problem: Write a function that implements a miniature stack-and-register
//          based program.

// Rules: The stack has a bunch of operations.
//       n: place a value, n, in the register. Do not modify the stack
//       PUSH: Push the register value onto the stack. Leave the value in the register
//       ADD: Pop a value from the stack and add it to the register
//       SUB
//       MULT
//       DIV
//       MOD
//       POP
//       PRINT
//       All operations are integer operations

// Input: String argument
// Output: Stack operation

// Steps:

// Determine the operation
// split the string ' '
// itterate over the array returning each operation
// Initialize a stack variable
// initial;ize a register
// pass the stack and resgister to perform operation
//

// takes a string argument
//  Check if it matches on of the options with a CASE
// push, push register value on the stack


function minilang(string) {
  let stack = [];
  let register = 0;
  string.split(' ').forEach(operation => {
    register = parseInt(register);
    if (Number.isInteger(Number(operation))) {
      register = Number(operation);
    } else {
      switch (operation){
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register = stack.pop() + register;
          break;
        case 'SUB':
          register = register - stack.pop();
          break;
        case 'MULT':
          register = stack.pop() * register;
          break;
        case 'DIV':
          register = register / stack.pop();
          break;
        case 'MOD':
          register = register % stack.pop();
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
      }
    }
  });
}

minilang('PRINT');
// 0
minilang('5 PUSH 3 MULT PRINT');
// 15
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8
minilang('5 PUSH POP PRINT');
// 5
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
//6
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
//12
minilang('-3 PUSH 5 SUB PRINT');
// 8
minilang('6 PUSH');
//(nothing is printed because the `program` argument has no `PRINT` commands)