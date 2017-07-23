/* QUESTION 4 - anagrams.js   

We are given a word and n phrases. We need to find out
how many anagrams of that word exist in each phrase.

Constraints
*1 ≤ n ≤ 1000
*0 ≤ |word| ≤ 100000
*All words are lowercase
*Special character other than letters and numbers
are: spaces, dot, comma.

Input Format
Complete a function named amountOfAnagrams 
which takes a single string (word) and 
an array of strings (phrases) as parameters.

Output Format
Return an integer array denoting the amount of
anagrams in each phrase.

Sample Input 1
word

word is drow when dwor
nothing to see here

Sample Output 1
3
0

Sample Input 2
dormitory

dirty room
dirtyroom
room is dirty

Sample Output 2
0
1
0
*/

/* My reasoning  
In order to know if two words are anagrams, I sort alphabetically the letters 
of both words and I compare them (after delete commas and dots). 
*/


var amountOfAnagrams = function(word, phrases){

	//Delete spaces, commas and dots from <word>
	word = word.replace(/\,/g,"").replace(/\./g,"").replace(/\ /g,"");

	var answer = [],	//it is an arr beacuse there is an int for each phrase. 
		sortedWord = word.split('').sort().join(''), 
		phraseAsArray = [], 
		eachWord = "";

	if(arguments.length !== 2){
		return "Invalid input.";
	}
	if(typeof word !== 'string' || word.length > 100000){
		return "Invalid input: word is not a String. ";
	}
	if(!Array.isArray(phrases)){
		return 'Invalid input: phrases is not an array. ';
	}
	if(phrases.length < 1 || phrases.length> 1000){
		return "Invalid phrases length. ";
	}
	else{
		//I loop through the phrases.
		for(var i = 0; i<phrases.length; i++){
			answer[i] = 0; 

			if(typeof phrases[i] !== 'string'){
				return "Invalid input in phrases["+i+"]: "+ phrases[i] +" is not a String.";
			}
			
			phraseAsArray = phrases[i].split(" "); 

			//Now I go through each word of each phrase. 
			for(var j=0; j<phraseAsArray.length; j++){
				eachWord = phraseAsArray[j].split('').sort().join('');		//sort alphabetically each word. 
				eachWord = eachWord.replace(/\,/g,"").replace(/\./g,"");	//delete dots and commas. 
				if (sortedWord == eachWord) {
					answer[i]++;
				}
			}
		}

		return answer; 
	}
}
amountOfAnagrams('casa', ['la casa estaba en llamas,', 'era de noche,', 'era hermoso.']);
