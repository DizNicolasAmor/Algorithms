/*   DNA Pairing.js
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
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

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


*/


function pairElement(str) {
  var arr = [];
  
  for(var i=0; i<str.length; i++){
    if(str[i]=="A"){
          arr[i] = ["A", "T"];
    }
    if(str[i]=="T"){
          arr[i] = ["T", "A"];
    }
    if(str[i]=="C"){
          arr[i] = ["C", "G"];
    }
    if(str[i]=="G"){
          arr[i] = ["G", "C"];
    }

  }
  return arr;
}

pairElement("GCG");
