// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  /* ==== SOLUTION ONE ==== */
  // another way is to get the middle char(s) and concatenate
  // everything around it in flipped order.
  // establish the middle char(s) and how many char(s) remain on
  // either side
  // divide length by 2 and check if it's less than it's math floor
  // (this checks for odd or even number of characters)
  // if less, then it's odd
  // initialize both left and right mid indexes with floor
  // initialize result with char at floor
  // initialize loop length with floor
  // if equal, then it's even
  // initialize right mid index with floor and left with floor - 1
  // initialize result with chars at both indexes
  // initialize loop length with floor - 1
  // loop through loop length and concatenate in flipped order
  // loop should start at 1 and end at length
  // on each iteration, decide what to concatenate
  // for left (start of result), char @ right mid index + iterator
  // for right (end of result), char @ left mid index - iterator

  // get the middle chars
  const halfLength = str.length / 2;
  const floor = Math.floor(halfLength);
  let leftMidIndex, rightMidIndex, result, loopLength;
  if (floor < halfLength) {
    // length is odd
    leftMidIndex = floor;
    rightMidIndex = floor;
    result = str[floor];
    loopLength = floor;
  } else {
    // length is even
    leftMidIndex = floor - 1;
    rightMidIndex = floor;
    result = str[rightMidIndex] + str[leftMidIndex];
    loopLength = floor - 1;
  }

  for (var i = 1; i <= loopLength; i++) {
    const beforeResult = str[rightMidIndex + i];
    const afterResult = str[leftMidIndex - i];
    result = beforeResult + result + afterResult;
  }

  return result;

  /* ==== SOLUTION TWO ==== */
  // loop through the string from end to start
  // concatenate each character to the result
  // complexity: n
  // for better, complexity of n/2?
  // build the 2 halves of the string and concatenate at the end
  // loop through half the length of the string
  // for the left half, the needed character is the length of the
  // string minus the iterator
  // for the right half, the needed character is half length minus
  // the iterator
  // each of these get concatenated to their respective results
  // at the end the results are appended.
}

module.exports = reverse;
