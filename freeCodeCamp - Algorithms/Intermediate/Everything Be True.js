/*  Everything Be True.js
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

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

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  
  //every()  gives a boolean answer
  //so, if the obj has not the prop  <pre>, it will be false. 
  var answer = collection.every(function(obj){
    return obj[pre];
    }); 

  return answer;
}

truthCheck([{"single": "yes"}], "single");
