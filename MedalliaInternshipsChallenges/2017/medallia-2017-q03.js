/*

### Question 3 - Most Frequent Number

	You are given a list of n numbers, and you must return the most repeated one.
	If there is more than one, then return the smallest one.

	Input Format

	- Important: input is already parsed by us.
	- The format is only important if you want to use the ‘Custom input’ option.
	- The first line contains an integer,n, denoting the amount of numbers.
	- Each line i of the n subsequent lines (where 0 ≤ i < n) contains an integer describing x.

	Constraints

	- 1 ≤ n ≤ 10
	- 0 ≤ x ≤ 10
	- Output Format
	- The function must return the smallest among the most repeated numbers.

	Examples

	- getMostFrequentNumber([4, 1, 2, 3, 3]); // must return 3
	- getMostFrequentNumber([9, 1, 2, 3, 1, 2, 3, 4, 2, 3]); // must return 2
	- getMostFrequentNumber([5, 0, 0, 1, 1, 2, 0]); // must return 2

*/

const getMostFrequentNumber = n => {
	const sortedNumbers = [...n].sort();
	let answer = sortedNumbers[0];
	let current = sortedNumbers[0];
	let count = 1;
	const incrementCount = () => { count += 1 };

	for (let i = 1; i < sortedNumbers.length; i += 1) {
		current = sortedNumbers[i];
		if (current === answer) incrementCount();
		else if (current === sortedNumbers[i + count]) {
			answer = current;
			i += count;
			incrementCount();
		}
	}

	return answer;
};

console.log(`Expect ${getMostFrequentNumber([4, 1, 2, 3, 3])} to be 3`)
console.log(`Expect ${getMostFrequentNumber([9, 1, 2, 3, 1, 2, 3, 4, 2, 3])} to be 2`)
console.log(`Expect ${getMostFrequentNumber([5, 0, 0, 1, 1, 2, 0])} to be 0`)
