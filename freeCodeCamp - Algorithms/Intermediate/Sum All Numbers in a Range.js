/*   Sum All Numbers in a Range.js

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum
Sign in so you can save your progress


  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.
*/


function sumAll(arr) {
  
  var max = Math.max(arr[0], arr[1]); 
  var min = Math.min(arr[0], arr[1]); 

  var answer = max;
  
  for(min; min<max; min++){
    answer += min;
  }
  
  return answer;
}

sumAll([1, 4]);
