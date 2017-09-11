/* No repeats please.js 

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum
Sign in so you can save your progress

  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.
permAlone("a") should return 1.
permAlone("aaab") should return 0.
permAlone("aaabb") should return 12.

*/


function permAlone(str) {
  var answer = 0; 
  //convert string to array
  str = str.split('');
  
  //this expression checks if a letter is repeated 
  var regexp = /([a-z])\1+/;

  //remember to convert str into an array
  //nextin the future, we will check each permutation posibility and: 
  //if( regexp.test(str.join(''))  === false ) --> answer++;

  //if you wanna check the permutations, uncomment the next line and return check at the end 
//  var check = [];

  //helper function
  function swap(a,b){
    var aux = str[a];
    str[a] = str[b];
    str[b] = aux; 
  }
  
  //another helper function
  //count the permutations with no letters repeated
  //n means number of characters
  function validPermutations(n) {
    //remember to convert str into a String. 
    if(regexp.test(str.join(''))===false && n === 1){
      
        //if you wanna check the permutations, uncomment the next line and return check at the end 
   //   check.push(str.join(''));
      
      answer++;
    }else{
      for(var i=0; i<n; i++){
        //recursation. 
        //so, this function loops str.length! times
        validPermutations(n - 1);
        //here is where permutation happens: 
        //read the Heap's algorithm
        swap(n % 2 ? 0 : i, n-1);
      }
    }
  }
  
  validPermutations(str.length);
  
  return answer;
}

permAlone('aab');
