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
  if (stringA.length !== stringB.length) return false;
  const getCharsCount = (array) =>
    array.split("").reduce((prev, curr) => {
      if (prev[curr]) {
        prev[curr] = prev[curr] + 1;
      } else {
        prev[curr] = 1;
      }
      return prev;
    }, {});
  const modifiedStringA = getCharsCount(stringA);
  const modifiedStringB = getCharsCount(stringB);

  let isAnagram = false;

  for (const key in modifiedStringA) {
    isAnagram = modifiedStringA[key] === modifiedStringB[key] ? true : false;
  }
  return isAnagram;
}

module.exports = anagrams;
