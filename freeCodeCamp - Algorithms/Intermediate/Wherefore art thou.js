/*

Wherefore art thou.js

Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value pairs (second argument).
Each property and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.

Test cases:

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].
*/

const whatIsInAName = (collection, source) => {
  let arr = [];
  const prop = Object.keys(source);
  let hasSameProp = false; 
    
  for (let i=0; i<collection.length; i++){
    for (let j=0; j<prop.length; j++){
      if (collection[i].hasOwnProperty(prop[j]) && collection[i][prop[j]] == source[prop[j]]){
        hasSameProp = true;
      }else hasSameProp = false;
    }
    
    if (hasSameProp) arr = arr.concat(collection[i]);
  }
  return arr;
};
