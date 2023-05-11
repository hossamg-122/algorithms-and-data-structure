// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversedString = "";

  for (const char of str) {
    reversedString = char + reversedString;
  }
  return str === reversedString;
}

module.exports = palindrome;

// 1st solution
// function palindrome(str) {
//     const reversedString = str.split("").reverse().join("");
//     return str === reversedString;
//   }

// 2ns solution
// function palindrome(str) {
//     const reversedString = str.split("").reduce((pre, curr) => curr + pre, "");
//     return str === reversedString;
//   }
