/*
Question - 8
Closest Numbers

Complete the closestNumbers function in the editor below. It has
one parameter: an array of integers, numbers. The function must
do the following:
1. Find all the (i, j) pairs of integers (wherei < j) having the minimal absolute difference (i.e., |j - i|) between any two
elements in the array. For example, if numbers = [6, 2, 4,
10], the minimal absolute difference between any two
elements is 2 and there are two such pairs with this
difference (i.e., (2, 4) and (4, 6)).
2. Print all (i, j) pairs having the minimal absolute difference in
ascending order, where each pair is printed as two spaceseparated
integers on a new line. For example, if the pairs
are (4, 5) and (3, 4), we print 3 4 on the first line and 4 5
on the second line.

Input Format
Locked stub code in the editor reads the following input from
stdin and passes it to the function:
The first line contains an integer,n, denoting the number of
elements in numbers.
Each line i of the n subsequent lines (where 0 = i < n) contains
an integer describing numbers.

Constraints
1 = n = 10
-2 × 10 = numbers = 2 × 10
The numbers array contains no duplicate elements.

Output Format
The function must print all(i, j) pairs where i < j and the value of
|j - i| is minimal. Each pair must be printed as two spaceseparated
integers on a new line, and each line of output must
be ordered first by ascending i and then by ascending j.
*/


function closestNumber(numbers){
  console.log('INPUT: ', numbers);

  let minimalAbsoluteDifference;
	const sortNumber = (a,b) => a - b;

	numbers.sort(sortNumber);
	minimalAbsoluteDifference = numbers[1] - numbers[0];	// default value

  let pairs = [];
  
	for (let i=0; i<numbers.length -1; i++){
    const difference = numbers[i+1] - numbers[i];
          
		if( numbers[i] === numbers [i+1])
      continue;
    if ( difference > minimalAbsoluteDifference ) 
			continue;
		else if ( difference === minimalAbsoluteDifference ) 
			pairs.push(`${numbers[i]}  ${numbers[i+1]}`);
		else if ( difference < minimalAbsoluteDifference ) {
			pairs = [`${numbers[i]}  ${numbers[i+1]}`];	// reset pairs
			minimalAbsoluteDifference = numbers[i+1] - numbers[i];
		}
	}

  /*
  // otra solución propuesta por Santi.
  const pairs = numbers.reduce((acc, value, index) => {
    if (index === numbers.length -1)
      return acc;

    const difference = numbers[index + 1] - value;

    if ( difference > minimalAbsoluteDifference ) 
      return acc;
    else if ( difference === minimalAbsoluteDifference )
      return [...acc, `${value}  ${numbers[index+1]}`];
    else if ( difference < minimalAbsoluteDifference ) {
      minimalAbsoluteDifference = difference;
      return [`${value}  ${numbers[index+1]}`];	// reset pairs
      }
  }, []);
  */
  
  return pairs.join('\n');
}


const input1 = [4, 2, 1, 3];
const input2 = [4, -2, -1, 3];

console.log( closestNumber(input1) );
console.log( closestNumber(input2) );
