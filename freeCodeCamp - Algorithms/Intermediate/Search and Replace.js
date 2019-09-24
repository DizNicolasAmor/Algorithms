/*

Search and Replace.js 

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

- First argument is the sentence to perform the search and replace on.
- Second argument is the word that you will be replacing (before).
- Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it: if you replace "Book" with "dog", it should be replaced as "Dog".

Test cases:

console.log(myReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch".
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error".
console.log(myReplace("His name is Tom", "Tom", "john")); // "His name is John".
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms".
*/

const myReplace = (str, before, after) => {
    const isUpperCase = char => char === char.toUpperCase();
    const auxAfter= after.split('');
    if (isUpperCase(before[0])) auxAfter[0] = auxAfter[0].toUpperCase();
    else auxAfter[0] = auxAfter[0].toLowerCase();
    const newAfter = auxAfter.join('');

    return str.replace(before, newAfter);
};
