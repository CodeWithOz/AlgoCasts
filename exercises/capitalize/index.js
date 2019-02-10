// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // SOLUTION ONE
  // run a replace on the string which takes each match and returns
  // the capitalized version
  // the regex: needs to find words case insensitively: (\w+)
  // needs to be global so it finds as many as necessary: /(\w+)/g
  // replacer needs to get this captured group: second arg of func
  // and capitalize its first letter: toUpperCase() with [0],
  // slice the rest and concatenate

  // SOLUTION TWO
  // similar to one but only focuses on finding the first word
  // char that follows a word boundary
  // regex: /\b\w/g (global to find every occurrence in string)
  // only needs to return the capitalized match (because match
  // is one letter)
  // this is better because it only matches the first character
  // after the word boundary
  const firstLetterRgx = /\b\w/g;
  return str.replace(firstLetterRgx, match => match.toUpperCase());
}

module.exports = capitalize;
