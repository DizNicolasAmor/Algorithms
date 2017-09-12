/*  Make a Person.js
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model
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

Object.keys(bob).length should return 6.
bob instanceof Person should return true.
bob.firstName should return undefined.
bob.lastName should return undefined.
bob.getFirstName() should return "Bob".
bob.getLastName() should return "Ross".
bob.getFullName() should return "Bob Ross".
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/


var Person = function(firstAndLast) {

  this.getFullName = function(){
    return firstAndLast;
  };

  this.getFirstName = function(){
    return firstAndLast.split(' ')[0];
  };

  this.getLastName = function(){
    return firstAndLast.split(' ')[1];
  };

  this.setFirstName = function(setFirst){
    firstAndLast = setFirst + ' ' + firstAndLast.split(' ')[1];
  };

  this.setLastName = function(setLast){
    firstAndLast = firstAndLast.split(' ')[0] + ' ' + setLast;
  };
  this.setFullName = function(setFull){
    firstAndLast = setFull;
  };

};


var bob = new Person('Bob Ross');
