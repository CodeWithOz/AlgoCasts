// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // SOLUTION ONE
  // loop from 1 to n, padding the string with spaces until n chars
  // for loop; i = 1, i <= n
  // at each step, repeat # i times then pad to n with spaces
  // log the outcome
  // for (var i = 1; i <= n; i++) {
  //   console.log('#'.repeat(i).padEnd(n, ' '));
  // }

  // SOLUTION TWO
  // recursive
  // start from the front (cur pos = 1)
  // conditions to check
  // cur pos < n: print the cur line, go to the next step
  // cur pos == n: print last line
  // buildSteps(1, n);

  // Stephen's first solution
  for (let row = 0; row < n; row++) {
    let stair = '';

    // process a row and create its string
    for (let column = 0; column < n; column++) {
      if (column <= row) stair += '#';
      else stair += ' ';
    }

    console.log(stair);
  }
}

function buildSteps(curPos, targetLength) {
  if (curPos < targetLength) {
    console.log('#'.repeat(curPos).padEnd(targetLength, ' '));
    return buildSteps(curPos + 1, targetLength);
  }
  if (curPos === targetLength) {
    return console.log('#'.repeat(curPos));
  }
}

module.exports = steps;
