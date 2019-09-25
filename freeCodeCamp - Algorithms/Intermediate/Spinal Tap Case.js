/*

Spinal Tap Case.js

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

const spinalCase = currentString => {
  let str = currentString.replace(/_/gi, '-').replace(/ /gi, '-');

 for(let i = 1; i < str.length; i += 1){
    if(str[i] === str[i].toUpperCase() && str[i-1] !== '-' && str[i] !== '-' && str[i] !== ':'){
        let newStr = "";
        for(let j = 0; j < str.length; j += 1){
          if (j<i) newStr += str[j];
          else if (j==i) newStr += "-" + str[j];
          else newStr += str[j];            
        }
      str = newStr;          
      }
  }
  str = str.toLowerCase();

  return str;
};

console.log(spinalCase("This Is Spinal Tap") === "this-is-spinal-tap");
console.log(spinalCase("thisIsSpinalTap") === "this-is-spinal-tap");
console.log(spinalCase("The_Andy_Griffith_Show") === "the-andy-griffith-show");
console.log(spinalCase("Teletubbies say Eh-oh") === "teletubbies-say-eh-oh");
console.log(spinalCase("AllThe-small Things") === "all-the-small-things");
