/*   Pig Latin.js
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
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

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".


*/


function translatePigLatin(str) {
  var newStr = "";
  
  //If a word begins with a vowel
  if(str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u"){
    newStr = str + "way";

  //If a word begins with a consonant and the 2nd letter is a vowel
  }else if(str[1] == "a" || str[1] == "e" || str[1] == "i" || str[1] == "o" || str[1] == "u"){
    for(var i=1; i<str.length; i++){
      newStr += str[i];    
    }   
    newStr += str[0] + "ay";    
  
  //If a word begins with a consonant cluster
  }else{
    for(var j=2; j<str.length; j++){
      newStr += str[j];    
    }   
    newStr += str[0] + str[1] +"ay";    
  }

  return newStr;
}

translatePigLatin("consonant");
