/* Arguments Optional.js 

Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) // returns 5.

If either argument isn't a valid number, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function addTogether(num1, num2) {
  const check = num => typeof num === "number"? num : undefined;
  const arg1 = check(arguments[0]);
  const arg2 = check(arguments[1]);
  
  if(arguments.length == 2) return arg1 && arg2 ? arg1 + arg2 : undefined;
  
  if(arg1) return function(arg2plus){
      return arg1 && check(arg2plus) ? arg1 + arg2plus : undefined;
    };

  return undefined;
}

addTogether(2,3);
