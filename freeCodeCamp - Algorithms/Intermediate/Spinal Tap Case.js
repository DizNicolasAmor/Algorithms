/*   Spinal Tap Case.js
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
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

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

*/


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  //replace the low dashes by dashes
  str = str.replace(/_/gi, '-');

  //replace the spaces by dashes
  str = str.replace(/ /gi, '-');
      
  
  //check if there are two words together
  for(var i=1; i<str.length; i++){
    if(str[i] == str[i].toUpperCase() && str[i-1] != ' ' && str[i-1] != '-' && str[i-1] != '_' && str[i] != '-' && str[i] != ':'){
        //add a dash between the words. 
        var newStr = "";
        for(var j=0; j<str.length; j++){
          if(j<i){
            newStr += str[j];
          }else if(j==i){
            newStr += "-" + str[j];
          }else{
            newStr += str[j];            
          }
        }
      str = newStr;          
      }  //if
  }  //for

  //all char to lower case
  str = str.toLowerCase();

  return str;
}

spinalCase("The_Andy_Griffith_Show");
