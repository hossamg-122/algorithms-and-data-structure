// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let modifiedString = str.split("");
  return modifiedString.reduce((pre, curr) => curr + pre, "");
}

//1st solution with array methods
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//2nd so;ution with for loop
// function reverse(str) {
//     let reversedString = [];
//     let modifiedString = str.split("");
//     for (let i = 0; i < modifiedString.length; i++) {
//       reversedString[i] = modifiedString[str.length - 1 - i];
//     }
//     return reversedString.join("");
//   }

//3rd solution with for of loop
// function reverse(str) {
//     let reversedString = [];
//     let modifiedString = str.split("");
//     for (let i = 0; i < modifiedString.length; i++) {
//       reversedString[i] = modifiedString[str.length - 1 - i];
//     }
//     return reversedString.join("");
//   }
module.exports = reverse;
