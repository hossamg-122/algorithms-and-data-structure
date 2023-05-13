// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let container = {};
  for (const char of str) {
    container[char] = container[char] + 1 || 1;
  }
  return Object.keys(container).reduce((prev, curr) => {
    return container[curr] > container[prev] ? curr : prev;
  });
}

// 1st solution
// function maxChar(str) {
//     let container = {};
//     for (const char of str) {
//       container[char] = container[char] + 1 || 1;
//     }
//     return Object.keys(container).reduce((prev, curr) => {
//       return container[curr] > container[prev] ? curr : prev;
//     });
//   }
module.exports = maxChar;
