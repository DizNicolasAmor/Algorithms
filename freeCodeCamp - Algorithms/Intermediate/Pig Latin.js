/*

Pig Latin.js

Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.

*/

const translatePigLatin = str => {
    let newStr = "";
    const isFirstLetterAVowel = str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u";
    const isSecondLetterAVowel = str[1] == "a" || str[1] == "e" || str[1] == "i" || str[1] == "o" || str[1] == "u";

    if(isFirstLetterAVowel) return (str + "way").toLowerCase();
    else if(isSecondLetterAVowel){
        for(var i=1; i<str.length; i++){ newStr += str[i]; }
        newStr += str[0] + "ay";
    }else{
        for(var j=2; j<str.length; j++){ newStr += str[j]; }
        newStr += str[0] + str[1] +"ay";
    }

    return newStr.toLowerCase();
};

console.log(translatePigLatin("california") === "aliforniacay");
console.log(translatePigLatin("paragraphs") === "aragraphspay");
console.log(translatePigLatin("glove") === "oveglay");
console.log(translatePigLatin("algorithm") === "algorithmway");
console.log(translatePigLatin("eight") === "eightway");
