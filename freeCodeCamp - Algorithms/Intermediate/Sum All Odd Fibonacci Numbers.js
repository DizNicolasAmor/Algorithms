/*

Sum All Odd Fibonacci Numbers.js

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1.
Every additional number in the sequence is the sum of the two previous numbers.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Test cases:

console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(4)); // should return 5.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.

*/

const sumFibs = num => {
  let answer = 1; 
  let a,b,c;
  a=1;
  c=a;

 while (a <= num){
    if(a%2 !== 0) answer += a;
    
    b=a;
    a+=c;
    c=b;
  }
  
  return answer;
};
