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

function pyramid(n, row = 0, level = '') {
  // SOLUTION ONE
  // let pyramid = '#';
  //
  // if (n === 1) return pyramid;
  //
  // for (var i = 1; i <= n; i++) {
  //   const extraHashes = pyramid.repeat(i - 1);
  //   const extraSpaces = ' '.repeat(n - i);
  //   console.log(
  //     extraSpaces + extraHashes + pyramid + extraHashes + extraSpaces
  //   );
  // }

  // SOLUTION TWO
  // if (n === 1) {
  //   return console.log(pyr);
  // }
  //
  // const extraHashes = '#'.repeat(i - 1);
  // if (i === n) {
  //   return console.log(extraHashes + pyr + extraHashes);
  // }
  //
  // if (i < n) {
  //   const extraSpaces = ' '.repeat(n - i);
  //   console.log(extraSpaces + extraHashes + pyr + extraHashes + extraSpaces);
  //   return pyramid(n, i + 1);
  // }

  // SOLUTION THREE
  // if (n === 1) return '#';
  //
  // let pyr = '';
  // for (let i = 1; i <= n; i++) {
  //   if (i < n) {
  //     if (i === 1) pyr = '#';
  //     else {
  //       pyr = '#' + pyr + '#';
  //     }
  //     const extraSpaces = ' '.repeat(n - i);
  //     console.log(extraSpaces + pyr + extraSpaces);
  //   } else {
  //     console.log('#' + pyr + '#');
  //   }
  // }

  // Stephen's first solution
  // const cols = 2 * n - 1;
  // const midpoint = Math.floor(cols / 2);
  // for (let row = 0; row < n; row++) {
  //   let level = '';
  //
  //   for (let column = 0; column < cols; column++) {
  //     if (midpoint - row <= column && midpoint + row >= column) {
  //       level += '#';
  //     } else {
  //       level += ' ';
  //     }
  //   }
  //
  //   console.log(level);
  // }

  // Stephen's second solution
  if (row === n) return;

  const cols = 2 * n - 1;

  if (level.length === cols) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor(cols / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
