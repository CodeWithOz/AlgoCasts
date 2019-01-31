// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // solution one
  // reverse the string and check its equality to the initial string
  // complexity: same as that of string reversal function
  // this assumes that string comparison is not an expensive process
  // so if the reversal if n/2 like the one I did, same for this
  // if string comparison is expensive, something better is needed

  // solution two
  // split the string in half, reverse one half and compare it to the
  // other half
  // this guarantees that string comparison is only on half the
  // string
  // Can we remove one step though? Maybe make it only string
  // comparison

  // solution three
  // iterate through floor of half the length of the string and
  // compare chars in both halves of the string
  // compare the char @ an index with the one @ length - index - 1
  const halfLength = Math.floor(str.length / 2);
  for (var i = 0; i < halfLength; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
}

module.exports = palindrome;
