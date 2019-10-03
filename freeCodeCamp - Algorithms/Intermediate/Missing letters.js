/* Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined. */

const fearNotLetter = str => {
    let missed;

    for (let i = 1; i < str.length; i += 1) {
        if (str[i-1].charCodeAt() != str[i].charCodeAt()-1)
            missed = String.fromCharCode(str[i].charCodeAt() - 1);
    }
    return missed;
};

console.log(fearNotLetter("abce") === "d");
console.log(fearNotLetter("abcdefghjklmno") === "i");
console.log(fearNotLetter("bcd") === undefined);
console.log(fearNotLetter("yz") === undefined);
