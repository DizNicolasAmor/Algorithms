/*   Missing letters.js
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
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

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.

*/


function fearNotLetter(str) {
  
  var missed;

  for(var i=1; i<str.length; i++){
    if(str[i-1].charCodeAt() != str[i].charCodeAt()-1){
      missed = String.fromCharCode(str[i].charCodeAt()-1);
    }
  }
  return missed;
}

fearNotLetter("abce");
