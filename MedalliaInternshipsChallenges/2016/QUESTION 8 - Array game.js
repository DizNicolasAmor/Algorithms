/*QUESTION 8 - Array game

Jessica has an array, numbers , consisting of n integers.
She plays a game with this array where, in each move,
she selects (n − 1) elements and increments their values
by one. For example, if n = 4, she chooses 3 of
the 4 elements during each move and increments each
of their values by one. Jessica wants to know the
minimum number of moves required to make all of the
array's elements equal.
Complete the countMoves function in your editor. It
has 1 parameter: an array of integers, numbers. It must
return a long integer denoting the minimum number of
moves required for all elements to be equal.

Input Format
The locked stub code in your editor reads the following
input from stdin and passes it to your function:
The first line contains an integer, n, denoting the size of
the numbers array.
Each line i of the n subsequent lines (where 0 ≤ i < n)
contains an integer describing numbers.

Constraints
1 ≤ n ≤ 10
1 ≤ numbers ≤ 10 , where numbers is
the i element of the numbers array.

Output Format
Your function must return a long integer denoting the
minimum number of moves required for Jessica to make
all elements of the array equal. This is printed to stdout
by the locked stub code in your editor.

Sample Input 1
1	2	3 
Sample Output 1
3
Explanation 1
Initially, numbers = [1, 2, 3]. 
Jessica makes the following moves:
1. Increments the values corresponding to indices in
the set {0, 1}, so the array becomes [2, 3, 3].
2. Increments the values corresponding to indices in
the set {0, 1}, so the array becomes [3, 4, 3].
3. Increments the values corresponding to indices in
the set {0, 2}, so the array becomes [4, 4, 4].
Recall that the set of indices updated during each move
must be of size n − 1. It took a minimal three moves to
make all elements in the array equal, so we return 3.

Sample Input 2
2	2	2
Sample Output 2
0
Explanation 2
Initially, numbers = [2, 2, 2]. Because all of its elements
are already equal, no moves are required and we
return 0.
*/

/* My reasoning  
First: I sort the numbers so the bigest stands at the end. 
Second: I know that if the first and the last numbers are equals, all are equals. 
Third: Loop the array and add +1 to each element except for the bigest until 
   all of them are equal. Count the loops. 
*/ 

var countMoves = function(numbers){
	//constraints
	 //<numbers> must be an array of integers.
	if(!Array.isArray(numbers)){
		return 'Invalid input. The input should be an array. ';
	}
	 // 1 ≤ numbers.length ≤ 10 
	if(numbers.length < 1 || numbers.length>10){
		return 'Invalid array.length. ';
	}
	 //each number must be a int between 1 and 10. 
	for(var j=0; j<numbers.length; j++){
		if(typeof numbers[j] !== 'number'){
			return 'Invalud input: '+ numbers[j] + ' is not a number.';
		}
		if(numbers[j] % 1 !== 0 ){
			return 'Invalud input: '+ numbers[j] + ' is not an int.';
		}
		if(numbers[j] < 1 || numbers[j] > 10){
			console.log(numbers[j]);
			return 'Invalud input: the numbers should be between 1 and 10.';
		}
	}

	var moves = 0;

	numbers = numbers.sort();

	while(numbers[0] !== numbers[numbers.length - 1] && moves<1000000){	//as long as all the elements are not equal.
			//note: I put moves<1000000 to prevent an infinite or big loop.  
		for(var i=0; i < (numbers.length-1); i++){	// add +1 to all numbers except for the bigest. 
			numbers[i]++;
		}

		numbers = numbers.sort(); //I must sort again beacuse now maybe the last element is not the bigest. 
		moves++;
	}

	if(moves === 1000000){
		return 'Number of moves required is too big or infinite. ';
	}
	return moves; 
}

countMoves([1, 2, 3]);

/*	TESTS
countMoves(1, 2, 3);
countMoves([]);
countMoves([1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1]);
countMoves([1, 2, 0]);
countMoves([1, 2, 13]);
countMoves([1, 2, 3.321]);
countMoves([1, 2, -3]);
countMoves([1, 2, '3']);
countMoves([1, 2, 'hello world!']);
countMoves([1, 2, 3, false]);
countMoves([1, 2, 3]);
countMoves([1, 2, 3, 6]);
countMoves([1, 2, 3, 7]);
*/
