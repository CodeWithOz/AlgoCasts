// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // SOLUTION ONE
  let pyramid = '#';

  if (n === 1) return pyramid;

  for (var i = 1; i <= n; i++) {
    const extraHashes = pyramid.repeat(i - 1);
    const extraSpaces = ' '.repeat(n - i);
    console.log(
      extraSpaces + extraHashes + pyramid + extraHashes + extraSpaces
    );
  }
}

module.exports = pyramid;
