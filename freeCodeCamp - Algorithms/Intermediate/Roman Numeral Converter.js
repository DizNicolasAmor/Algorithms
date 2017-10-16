/*   Roman Numeral Converter.js
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
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

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"

*/


function convertToRoman(num) {
  var romanNum = ""; 
  var rest = 0;
  
  while(num !== 0){
    if(num >= 1000){
      num -= 1000;
      romanNum = romanNum + "M";
    }else if(num >= 900){
      num -= 900;
      romanNum = romanNum + "CM";
    }else if(num >= 500){
      num -= 500;
      romanNum = romanNum + "D";
    }else if(num >= 400){
      num -= 400;
      romanNum = romanNum + "CD";
    }else if(num >= 100){
      num -= 100;
      romanNum = romanNum + "C";
    }else if(num >= 90){
      num -= 90;
      romanNum = romanNum + "XC";
    }else if (num >= 50){
      num -= 50;
      romanNum = romanNum + "L";
    }else if (num >= 40){
      num -= 40;
      romanNum = romanNum + "XL";
    }else if (num >= 10){
      num -= 10;
      romanNum = romanNum + "X";
    }else if (num == 9){
      num -= 9;
      romanNum = romanNum + "IX";
    }else if (num >= 5){
      num -= 5;
      romanNum = romanNum + "V";
    }else if (num == 4){
      num -= 4;
      romanNum = romanNum + "IV";
    }else if (num >= 1){
      num -= 1;
      romanNum = romanNum + "I";
    }
  }
  
  return romanNum;
}

convertToRoman(36);
