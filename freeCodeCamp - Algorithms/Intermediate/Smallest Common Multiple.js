/*   Smallest Common Multiple.js

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
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

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/


function smallestCommons(arr) {
  if(arr[0]<1 || arr[1]<1){
    return "Your array has an invalid value. ";
  }
  
  var answer = 0; 

  //order the array 
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);  
  arr[0] = min; 
  arr[1]= max;

  //smallest c m between two numbers: i use euclid's' algorithm
  function scm(num1, num2){
    var value; 
    
    //first, find the maximum common divisor
    var mcd; 
    var rest;
    var multiplication = num1 * num2;
    
    if(num2%num1 === 0){
      mcd = num1;
    }else{
      while(num2%num1 !== 0){
        rest = num2 % num1;
        num2 = num1;
        num1 = rest;
      }
      mcd = num1;
    }
    
    //return the scm    
    value = multiplication / mcd;
    return value;
  }
  
  
  //loop  scm in the array
  var a = arr[0];
  var b = arr[0]+1;

  for(b; b<=arr[1]; b++){
    answer = scm(a, b);
    a = answer;
  }
  
  return answer;
}


smallestCommons([1,5]);
