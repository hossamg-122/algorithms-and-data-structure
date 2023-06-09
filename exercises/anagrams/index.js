// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanString = (string) =>
    string.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
  const modifiedStringA = cleanString(stringA);

  const modifiedStringB = cleanString(stringB);

  return modifiedStringA === modifiedStringB;
}

module.exports = anagrams;

// 1st solution
// function anagrams(stringA, stringB) {
//     const getCharsCount = (string) =>
//       string
//         .toLowerCase()
//         .replace(/[^\w]/g, "")
//         .split("")
//         .reduce((prev, curr) => {
//           prev[curr] = prev[curr] + 1 || 1;
//           return prev;
//         }, {});
//     const modifiedStringA = getCharsCount(stringA);
//     const modifiedStringB = getCharsCount(stringB);
//     if (
//       Object.keys(modifiedStringA).length !== Object.keys(modifiedStringB).length
//     )
//       return false;
//     let isAnagram = false;
//     for (const key in modifiedStringA) {
//       isAnagram = modifiedStringA[key] === modifiedStringB[key] ? true : false;
//     }
//     return isAnagram;
//   }
