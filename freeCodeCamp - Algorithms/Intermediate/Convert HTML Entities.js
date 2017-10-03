/*   Convert HTML Entities.js
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
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

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.

*/


function convertHTML(str) {
  
  for(var i=0; i<str.length; i++){
    if(str[i] === "&"){
      str = str.replace(/&/i, '&amp;');
    }else if(str[i] === "<"){
      str = str.replace(/</i, '&lt;');
    }else if(str[i] === ">"){
      str = str.replace(/>/i, '&gt;');
    }else if(str[i] === "'"){
      str = str.replace(/'/i, '&apos;');
    }else if(str[i] === '"'){
      str = str.replace(/"/i, '&quot;');
  }
}  
  return str;
  
}

convertHTML("Dolce & Gabbana");
