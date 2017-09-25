/* Binary Agents.js
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
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

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/


function binaryAgent(str) {
  
  var answer = [];
  //convert str in an array, where each byte is an element. 
  str = str.split(' ');
  
  //this function convert binary to decimal. 
  var ConvertBase = function (num) {
    return {
      from : function (baseFrom) {
        return {
          to : function (baseTo) {
            return parseInt(num, baseFrom).toString(baseTo);
          }
        };
      }
    };
  };
  
  // binary to decimal
  ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
  };
  
  //convert each element to decimal
  for(var j=0; j<str.length; j++){
    answer[j] = ConvertBase.bin2dec(str[j]);
  }

  //convert the decimal to char
  for(var i=0; i<str.length; i++){
     answer[i] = String.fromCharCode(answer[i]); 
  }
  
  answer = answer.toString();
  answer = answer.replace(/,/gi, '');
  
  return answer;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
