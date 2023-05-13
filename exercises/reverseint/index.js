// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n > 0) {
    return Number(String(n).split("").reverse().join(""));
  } else {
    const modifiedNumber = String(n).split("");
    let negativeSign = modifiedNumber.shift();
    return Number(negativeSign + modifiedNumber.reverse().join(""));
  }
}

// 1st solution
// function reverseInt(n) {
//     if (n > 0) {
//       return Number(String(n).split("").reverse().join(""));
//     } else {
//       const modifiedNumber = String(n).split("");
//       let negativeSign = modifiedNumber.shift();
//       return Number(negativeSign + modifiedNumber.reverse().join(""));
//     }
//   }
module.exports = reverseInt;
