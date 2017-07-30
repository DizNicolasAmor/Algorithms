/*  Symmetric Difference.js

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference

*/


function sym(args) {
  //call all arguments
  args = Array.from(arguments);
  

  function diffArray(arr1, arr2){
    var filter = [];
    for(var i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1 && filter.indexOf(arr1[i]) === -1){
        filter.push(arr1[i]);
      }  
    }
    for(var j=0; j<arr2.length; j++){
      if(arr1.indexOf(arr2[j]) === -1 && filter.indexOf(arr2[j]) === -1){
        filter.push(arr2[j]);
      }  
    }
    return filter;
  } //diffArray
  
  return args.reduce(diffArray);
}

sym([1, 2, 3], [5, 2, 1, 4]);
