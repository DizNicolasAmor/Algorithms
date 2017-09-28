/*   Finders Keepers.js
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()
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

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.


*/


function findElement(arr, func) {
  var num;
  
  for(var i=0; i<arr.length; i++){
    if(func(arr[i]) === true){
      num = arr[i];
      break;
    }
  }
 
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
