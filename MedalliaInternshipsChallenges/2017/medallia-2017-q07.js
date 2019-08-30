/*

### Question 7 - The Taxman

	George is a taxman. He must collect taxes from n taxpayers.
	George assigned each taxpayer an unique ID number from 1 to n.
	Taxpayer i must pay exactly i dollars.
	For example, taxpayer 1 will pay 1 dollar, taxpayer 3 will pay 3 dollars, and so on.
	George is a very organized man, so he will visit each taxpayer in order
	(i.e., from 1 to n ) to collect their money. George is also a very superstitious man.
	He never wants the current sum of collected money to be equal to k .
	Because of that, George may refuse to take money from some of the taxpayers.
	Given n and k , what is the maximum amount of money he can collect?

	Complete the maxMoney function in the editor below. It has two parameters:

	- 1. An integer, n , denoting the number of taxpayers.
	- 2. An integer, k , denoting George's unlucky number.
	
	The function must return an integer denoting the maximum amount of money George can collect
	by visiting the taxpayers in order of sequential ID number and ensuring that the current sum of money collected is never equal to k.
	As the answer could not fit in a 64 bit integer, return answer modulo ( 10^9 + 7 ) .

	Input Format

	- The first line contains an integer, n , denoting the number of taxpayers.
	- The second line contains an integer, k , denoting George's unlucky number.
 
	Constraints

	- 1 ≤ n ≤ 2 × 10^12
	- 1 ≤ k ≤ 4 × 10^15

	Output Format

	The function must return an integer denoting the maximum amount of money
	George can collect by visiting the taxpayers in order of sequential ID number and ensuring
	that the current sum of money collected is never equal to k.
	As the answer could be large, return answer % ( 10^9 + 7 ).
	This is printed to stdout by locked stub code in the editor.

*/

const maxMoney = (n, k) => {
	let count = 0;
	for (let i = 1; i <= n; i += 1) {
		count += i;
		if (count === k) count -= 1;
	}
	return count;
};

/* TESTS */
console.log(`Expect ${maxMoney(2, 2)} to be 3`);
console.log(`Expect ${maxMoney(2, 1)} to be 2`);
console.log(`Expect ${maxMoney(3, 3)} to be 5`);
