/* QUESTION 9 - Fun with palindromes

Problem Statement
A palindrome is a word, phrase, number, or other sequence of characters which reads the same forward
and backwards. For example: "madam" and "dad" are palindromes, but "sir" and "sad" are not.
The fun score for two subsequences (not substrings), A and B, in string s is the product of their
respective lengths. There are many ways to choose A and B, but your goal is to maximize the fun
score. There can't be any overlap or crossover between the two subsequences.
Given string s, select exactly two non-overlapping noncrossing-over palindromic subsequences , A and B,
from s to maximize the fun score.
Non crossing over means that given the string aababb , you can't get aaa and bbb, since the subsequences cross over.

Constraints
1 < |s| ≤ 3000
s is composed of lowercase English characters.

Input Format
Complete a function named funPal which takes a single string (s) as a parameter.
Output Format
Return a single integer denoting the maximum possible fun score for s.

Sample Input 0
acdapmpomp
Sample Output 0
15

Sample Input 1
axbawbaseksqke
Sample Output 1
25

Explanation
Sample Case 0
You can select A= aca and B= pmpmp . The product is 3 * 5 = 15, so we return 15.
Sample Case 1
You can select A= ababa and B= ekske . 
The product is 5 * 5 = 25, so we print 25. Another possible solution
is A= ababa and B= ekqke which also yields the answer 25.
*/

/* My reasoning 
In order to find a palindrome in a str, I know that: 
-> first char and last char are equal. 
-> if there are more char between them, first char +1 == last char -1. 
-> and so on. 
With this criterion I built the auxiliar function countPal(str); 

In order to find the two bigest subsequences: 
-> I go through each char of the array and I count the palindromes that can be formed from this char. 
-> Then, I push () this count in an array named <subsequences>;
-> If inside the last palindrome there is a char that is the beggining of a bigger palindrome, I replace this palindrome. (so there is non-overlapping). 
-> Finally, with subsequences.sort() I know that the two bigest non-overlapping subsequences (A and B) are at the end. 
->Multiply A and B and that is the max score. 
*/

var funPal = function(s){
	if(typeof s !== 'string'){return 'Invalid input. You should set a String. ';}

	if(s.length < 2 || s.length > 3000){		//constraint
		return 'Invalid input.length.';
	}
	var score = 0,
		limit,
		subsequences = [];

	//auxiliar function
	var countPal = function(str){
		var count = 0,
		    noLettersMatch = true,
		    arr = str.split('');

		if(arr.length === 0){
			return count;
		}
		if(arr.length === 1){
			count++;
			return count;
		}
		if(arr.length > 1){
			for(var i=0; i < arr.length; i++){
				for(var j=arr.length-1; j > i; j--){
					if(arr[i] === arr[j]){
						noLettersMatch = false;
						count += 2; 
						arr = arr.slice(i+1, j); 
						count += countPal(arr.join(''));
						return count;
					}
				}
			}
			if(noLettersMatch){
				count++; 
				return count;
			}
		}
	}

	//auxiliar function to avoid bugs when first letter is not used (in subsequences.push()). 
	var firstLetterIsUsed = function(otherStr){
		if (otherStr.length>0){
			for(var f=1; f<otherStr.length; f++){
				if(otherStr.charAt(0) === otherStr.charAt(f)){
					return true;
				}
			}
		}
		return false;
	}

	//set all non-overlapping subsequences
	for(var k=0; k<s.length; k++){
		if(firstLetterIsUsed(s.substr(k))){
			subsequences.push(countPal(s.substr(k)));
		}
		else{
			subsequences.push(1);
		}

		//set the limit for the palindrome that starts in s.charAt(k). 
		for(var l=k; l<s.length; l++){
			if(s.charAt(k) === s.charAt(l)){
				limit = l;
				//For example, for s = 'abcadeed', k=0 and limit = 3. 
				//It means that the palindrome that begins at char=0 finishes at chat=3, ('abca')
			}
		}

		//go through chars within this palindrome
		var noBiggerPal = true;
		for(var m=k+1; m<limit; m++){
			if(countPal(s.substr(k)) < countPal(s.substr(m)) && firstLetterIsUsed(s.substr(m))){	//if a bigger palindrome starts with one of these chars, 
				subsequences.pop();		//replace it. 
				k = m-1;	//note: write -1 beacuse the next loop adds +1 automathically. 
				noBiggerPal = false;
				//note: you only want to replace se subseq only if the first letter is used. 
				//if you do not use this aux funtion, for ex, in s='abcadeed', in k=2, countPal==4. 
			}
		}

		if(noBiggerPal){	//if there is no bigger palindrome, k = limit+1;
			k=limit;	//note: only write k=limit, because the next loop adds +1 automathically. 
		}
	}

	console.log(subsequences);	//to check. 

	if(subsequences.length === 1){
		score = subsequences[0];
	}
	if(subsequences.length > 1){
		subsequences.sort();
		score = subsequences[subsequences.length-1] * subsequences[subsequences.length-2]
	}

	return score;
} 

funPal('acdapmpomp');

//OTHER TESTS
//funPal('axbawbaseksqke');
//funPal('abacdffd');
//funPal('abacdffdkk');
//funPal('abacdffdkkw');
