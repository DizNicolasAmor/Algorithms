/*  Symmetric Difference.js

Create a function that takes two or more arrays and returns an array of the symmetric difference.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference"
of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).

For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements
which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

const sym = (...args) => {
	const result = [];
	const argsCopy = args.map(arr => ([...arr]));

	argsCopy.forEach((currentArray, index) => {
		const otherArrays = argsCopy.filter((ar, ix) => ix !== index);
		const isInOtherArray = elem => otherArrays.some(arr => arr.includes(elem));

    currentArray.forEach(num => { if (!isInOtherArray(num)) result.push(num); });
	});

	return result;
};

console.log(sym([1, 2, 3], [5, 2, 1, 4])); /* [3, 5, 4] */
console.log(sym([1, 2, 3], [5, 2, 1, 4], [5, 6, 9], [8, 9])); /* [3, 4, 6, 8] */
