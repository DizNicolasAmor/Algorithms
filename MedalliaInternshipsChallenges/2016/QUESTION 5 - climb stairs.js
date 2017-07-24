// QUESTION 5 in javascript

/*	CHALLENGE
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Constraints
1 ≤ n ≤ 30

Input Format
Complete a function named waysToClimb which takes a single integer (n) as a parameter.

Output Format
Return a single integer denoting the amount of distinct ways to climb the n stairs.

Sample Input 1
2
Sample Output 1
2

Explanation Sample 1
You can climb 2 stairs in two different ways: [1, 1] or [2].

Sample Input 2
10
Sample Output 2
89 
*/

/* 	MY REASONING
In this exercise you have to count the different ways of combining the numbers <1> and <2>. 
Accumulate the different ways in a var and return it at the end. 
The math formula for combination is this: totalSteps! / (stepsOfOne! * stepsOfTwo!) 
Let's see for ex. a stair with 5 steps. 	// n = 5; 

First: you climb steps one by one. 
  In the formula would be this: n! / n! * 0! = 1	// because you have 0 steps of <2>. 
  So, till this moment differentWays = 1;
  In our ex: [1, 1, 1, 1, 1]; 

Second: add a step of <2>. 
  In the formula would be this: (n-1)! / (n-2)! * 1!	//in our ex. = 4. 
  In our ex: [[1, 1, 1, 2], [1, 1, 2, 1], [1, 2, 1, 1], [2, 1, 1, 1]]; 
  differentWays = 1 + 4 = 5; // you add 4 different ways in this section. 

Continue this logic until you can no longer add steps of <2>.
That's it. 
*/

  var waysToClimb = function(n){

    //auxiliar function permute(num);
    var permute = function(num){
      if(num<0){
        return "Incorrect num. "
      }
      
      else{
        var result = 1;
        
        for(var i=num; i>1; i--){
          result *= i;
        }
        return result;
      }
    }

    //main section

    var difWays = 1;	//You can climb the steps one by one

    //set the limit for loop
    var limit;
    if(n%2 === 0){limit = n/2;}
    else if(n%2 === 1){limit = n/2 - 0.5;} 

    // <n> must have more than 0 steps and less than 31. 
    if(n<1 || n>30){return "Incorrect input. "} 

    else{

		if(limit > 0){		//if(limit === 0) -> the stair only has one step. 
		  var dividend, 
          	  divisor, 
          	  loopAuxiliar;

          for(var i=1;  i<=limit; i++){
	        dividend = permute(n-i);
			divisor = permute( n - (2*i) ) * permute(i);
			loopAuxiliar = dividend/ divisor;

    	    difWays += loopAuxiliar;
		  }
		}

		return difWays;
	}	//else
} // waysToClimb()

//tests results
console.log('For 0 step: ' + waysToClimb(0));
console.log('For 1 step: ' + waysToClimb(1));
console.log('For 2 steps: ' + waysToClimb(2));
console.log('For 3 steps: ' + waysToClimb(3));
console.log('For 10 steps: ' + waysToClimb(10));
console.log('For 31 steps: ' + waysToClimb(31));
