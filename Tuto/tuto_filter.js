/*
  - Filter
  --- method creates a new array

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
//! Exemple 1:
// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function(el) {
    return el.startsWith("A") ? true : false;
});
console.log(filterdFriends);
//* the syntax  "return el.startsWith("A") ? true : false;"  == "return el.startsWith("A");"
//*  because filter in default return true or false



//! Exemple 2:
// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function(el) {
    return el % 2 === 0;
});

console.log(evenNumbers);

//! Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);