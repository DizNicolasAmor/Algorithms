/*  Question 7 - Two operations

You are given only two operations: ADD_1 and MULTIPLY_2 . 
You start from 0 and using the two operations reach a number N. 
Find the least number of operations needed to do this.

Input Format:
The first line will contain an integer T that gives the
number of test cases. There will be one integer N on
each of the following T lines.
Output Format
Return an integer array denoting the minimum number
of operations needed in each test case.

Constraints
T ≤ 10,000
N ≤ 10

Sample Input
5
3
Sample Output
4
3
Explanation
Case1: To reach 5 from 0. We do ADD1 then Multiply2
two times and then add 1 again , total 4 steps
Case2: To reach 3 from 0. We can either do Add 1 3
times or Add 1 , multiply 2 and again add 1
*/

/* My reasoning 
It is easier to do operations in reverse and count the steps in var <answer>. 
while (n !=== 0)
  If  (<n> is even)  n /= 2;
  else If (<n> is odd)  n--;
  answer++;
*/

var twoOperations = function(n){
	//constrain: T ≤ 10,000
	if(arguments.length > 10000){
		return 'Invalid input. You shoud not set more than 10000 elements. ';
	}

	var answer = [], 
		aux;

	for(var i=0; i<arguments.length; i++){
		//constraints
		if(typeof arguments[i] !== 'number' || arguments[i]%1 !== 0){
			return 'Invalid input: arguments['+ i +'] is not an int.';
		}
		if(arguments[i] > 10){
			return 'Invalid input: you number should be smaller than 10. ';
		}

		answer[i] = 0;
		aux = arguments[i];

		if(arguments[i] < 0){	//constraints do not warn of negative numbers.
			aux = 0;			//I do this to avoid infinite loops. 
			answer[i] = 'infinite. ';
		}

		while(aux !== 0){
		  if(aux%2 === 0){
		  	aux/=2;
		  }
		  else{
		  	aux--;
		  }
		  answer[i]++;
		}
	}	//for
	return answer;
}

twoOperations(5, 3);

// OTHER TESTS
//twoOperations(5, 10);
//twoOperations(5, 83);
//twoOperations(5, 0);
//twoOperations(5, 1.23);
//twoOperations(5, -3);
//twoOperations(5, '3');
//twoOperations(5, 'hello world!');
//twoOperations(5, 3, false);
//twoOperations(5, NaN);
//twoOperations(5, undefined);
