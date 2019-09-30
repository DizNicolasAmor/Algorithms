/* Create a function that looks through an array (1st arg) and returns the first element that passes a truth test (2nd arg) */

const findElement = (arr, func) => arr.find(func);

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) === 8);
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) === undefined);
