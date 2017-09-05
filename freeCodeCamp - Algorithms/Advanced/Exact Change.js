/* Exact Change.js

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
Run tests (ctrl + enter)
Reset your code
Get a hint
Ask for help on the forum
Sign in so you can save your progress

/**
  * Your output will go here.
  * Any console.log() -type
  * statements will appear in
  * your browser's DevTools
  * JavaScript console as well.
  */

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/


//we need this array to give the change in the right way
var bills = [
  {name: 'ONE HUNDRED',  value: 100.00},
  {name: 'TWENTY',       value: 20.00},
  {name: 'TEN',          value: 10.00},
  {name: 'FIVE',         value: 5.00},
  {name: 'ONE',          value: 1.00},
  {name: 'QUARTER',      value: 0.25},
  {name: 'DIME',         value: 0.10},
  {name: 'NICKEL',       value: 0.05},
  {name: 'PENNY',        value: 0.01}
];

function checkCashRegister(price, cash, cid) {

  var change = cash - price;

  var cashInDawer = cid.reduce(function(acc, next) {
    return acc + next[1];
    //this function accumulates in var acc, all the cash we have
  }, 0.0);

  // return the appropriate string if needed
  if (cashInDawer < change) {
    return 'Insufficient Funds';
  } else if (cashInDawer === change) {
    return 'Closed';
  }

  /* Now we use the array called bills.
   We want our cid, which is currently ascending, to match the order of the denominations array. Why?
  Think about how you would give change to a customer. You would start with the biggest bills,
  and then work your way down. If you owe a customer 15 dollars in change, it's standard protocol to give them a ten and a five instead of 3 fives (unless they requested it!). */
  cid = cid.reverse();

  var result = bills.reduce(function(acc, next, index) {
    // if the change owed is greater than or equal to the value of current denomination
    if (change >= next.value) {
      var currentValue  = 0.0;
      // keep looping so long as we have enough of that current denomination in the cash drawer
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        //javascript does something strange with rational numbers, so
        // for decimal precision: 
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
      
    } else {
      return acc;
    }
  }, []);

  // if we don't hace bills to pay change, Insufficient Founds
  return result.length > 0 && change === 0 ? result : 'Insufficient Funds';
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
