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
  // SOLUTION ONE
  // build char maps, excluding the specified chars
  // exit if lengths of keys arrays do not match
  // iterate through keys and exit if their values do
  // not match
  // return true at the end
  const isLetter = char => char.search(/[a-z]/i) === 0;

  const mapA = {};
  for (let char of stringA) {
    if (isLetter(char)) {
      mapA[char] = mapA[char] + 1 || 1;
    }
  }

  const mapB = {};
  for (let char of stringB) {
    if (isLetter(char)) {
      mapB[char] = mapB[char] + 1 || 1;
    }
  }

  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;

  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) return false;
  }

  return true;
}

module.exports = anagrams;
