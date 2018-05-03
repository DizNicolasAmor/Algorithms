
/*
QUESTION 9 - Game of Thrones

   King Robert rules 7 kingdoms. He finds out from a raven that the
Dothraki are on the war path against him. The Dothraki need to
cross the treacherous Byss river enter his realm. There is only
one bridge that connects both sides of the river, and it is sealed
by a huge door.
   The king wants to lock the door so that the Dothraki cannot
enter. But, to lock the door he needs a key that is an anagram of
a palindrome string.
   The king has already solved a series of enigmas and obtained a
string composed of lowercase English letters. He needs your
help to figure out whether or not any anagram of that string can
be a palindrome that he can use.

Constraints
1 ≤ length of string ≤ 10
Each character of the string is a lowercase English letter.

Input Format
A single line which contains the input string

Output Format
A single line which contains "YES" or "NO" (uppercase,
without quotes).

Sample Input:   aaabbbb
Sample Output:   YES
Explanation:    A palindrome permutation of the given string is bbaaabb.

Sample Input:   cdefghmnopqrstuvw
Sample Output:   NO
*/

function checkPosiblePalindrome(str) {
  const isPalindrome = str => {
    let i = 0;
    while (i <= str.length - 1 - i) {
      if(str[i] !== str[str.length - 1 - i])
        return false;
      i += 1;
    }
    return true;
  };
  const getAllPermutations = string => {
    if (string.length < 2)
      return string;
    let permutations = [];
    for (let i=0; i<string.length; i++) {
      let char = string[i];
      if (string.indexOf(char) != i) // in case the char is duplicated
        continue;
      const remainingString = string.slice(0,i) + string.slice(i+1,string.length);
      for (let subPermutation of getAllPermutations(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
  };
  if(str.length > 10)
    return 'NO';
  const permutationsArray = getAllPermutations(str);
  
  return permutationsArray.some(isPalindrome) ? 'YES' : 'NO';
}

const input1 = 'aaabbbb';
const input2 = 'cdefghmnopqrstuvw';

console.log(checkPosiblePalindrome(input1));
console.log(checkPosiblePalindrome(input2));

