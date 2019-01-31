// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseStr = require('../reversestring');

function reverseInt(n) {
  // note if number if negative
  const isNegative = n < 0;

  // convert the number to a string
  let numStr = String(n);

  // remove negative sign if necessary
  numStr = isNegative ? numStr.substring(1) : numStr;

  // reverse the string
  numStr = reverseStr(numStr);

  // re-append negative sign if necessary
  numStr = isNegative ? `-${numStr}` : numStr;

  // convert to number and return
  return Number(numStr);
}

module.exports = reverseInt;
