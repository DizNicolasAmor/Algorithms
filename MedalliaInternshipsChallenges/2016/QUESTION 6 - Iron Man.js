/*  QUESTION 6 - IronMan

IronMan is ready for battle! He starts his battle at location0
moves in 1 -unit increments toward his final showdown at
location n−1. Each location i has a power value, p . If p < 0, then
there is an enemy at location i that he must lose p power to
beat; if p ≥ 0, then he will restore p power at location i . IronMan
dies if his armor charge becomes < 1 at any point either during
or after a fight, so he needs a proper initial charge to survive all
possible fights in his battle traveling from location 0 to location
n−1. Help him find the minimum charge needed to survive all
fights in the battle!
Complete the ironMan function in your editor. It has 1 parameter:
an array of n integers, p , where each index i (0 ≤ i < n) describes
the power charge lost or gained at battle location i. If the value
at some p < 0, it represents the amount of charge IronMan must
deplete to defeat the enemy; otherwise, it represents the
amount of charge that he can restore at that location. Your
function must return an integer denoting the minimum starting
charge IronMan needs to survive all fights.

Input Format
The locked stub code in your editor reads the following input
from stdin and passes it to your function:
The first line contains an integer, n , denoting number of
locations IronMan will pass through.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains
an integer describing the amount of charge he will gain or lose
at battle location i .

Constraints
1 ≤ n ≤ 105
−100 ≤ pi ≤ 100

Output Format
Your function must return an integer denoting the minimum amount 
of charge IronMan will need to survive all fights in the battle. 
This is printed to stdout by the locked stub code in your editor.

Sample Input 0
The following argument is passed to your function: p = {-5, 4, -2,
3, 1, -1, -6, -1, 0, 5}
Sample output 0
8

Sample Input 1
The following argument is passed to your function: p = {−5,4,
−2, 3, 1}
Sample output 1
6

Sample Input 2
The following argument is passed to your function: p = {−5, 4,
−2, 3, 1, −1, −6, −1, 0, −5}
Sample Output 2
13

Explanation
Sample Case 0:
If IronMan's initial charge < 8, then he will die somewhere in the
middle of his battle. Thus, we return 8 as the minimum charge
needed to survive the battle.
*/

/* My reasoning
Loop <p> and accumulate the sum of integers. At any point of the loop: 
if(minCharge + acc < 1)	//Iron Man dies. 
  minCharge = 1 - acc;
*/

var ironMan = function(p){

	if(!Array.isArray(p)){	//constraint: p must be an array of int. 
		return 'Invalid input. You should set an array. ';
	}

	if(p.length<1 || p.length>105){	//constraint: 1 ≤ p.length ≤ 105
		return 'Invalid input length. ';
	}

	var minCharge = 1,
		acc = 0;

	for(var i=0; i<p.length; i++){
		if(typeof p[i] !== 'number' || p[i]%1 !== 0){	//constraint: p[i] must be an int. 
			return 'Invalid input: arguments['+ i +'] is not an int. ';
		}
		if(p[i]<-100 || p[i]>100){	//constraint: −100 ≤ p[i] ≤ 100
			return 'Invalid input value: arguments['+ i +'] should be between -100 and 100. ';
		}

		acc += p[i];

		if(minCharge + acc < 1){	//if Iron Man dies, he needed more charge. 
			minCharge = 1 - acc;
		}
	}

	return minCharge;
}

ironMan([-5, 4, -2, 3, 1, -1, -6, -1, 0, 5]);

//OTHER TESTS
//ironMan([-5, 4, -2, 3, 1]);
//ironMan([-5, 4, -2, 3, 1, -1, -6, -1, 0, -5]);
//ironMan(-5, 4, -2, 3, 1, -1, -6, -1, 0, 5);
//ironMan([-5, 4, -2, 3.321, 1]);
//ironMan([-5, 4, -2, 3, 'hello world!']);
//ironMan([-5, 4, -2, 3, false]);
//ironMan([-5, 4, -2, 3, false]);
//ironMan([-5, 4, -2, 3, 101]);
//ironMan([-5, 4, -2, 3, -101]);
//ironMan([]);
