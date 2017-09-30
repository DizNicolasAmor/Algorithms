/*   Sum All Primes.js
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
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

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.


*/


function sumPrimes(num) {
  var answer = 0;
  
  function prime(x){
    var isPrime = true; 
    
    for(var j=2; j<x; j++){
      if(x % j === 0){
        isPrime = false; 
      }
    }
    return isPrime;
  }

  for(var i=2; i<=num; i++){
    if(prime(i) === true){
      answer += i;
    }
  }

  return answer;
}

sumPrimes(10);
