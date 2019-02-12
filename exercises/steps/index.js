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
  for (var i = 1; i <= n; i++) {
    console.log('#'.repeat(i).padEnd(n, ' '));
  }

  // SOLUTION TWO
  // recursive
  // start from the front
  // conditions to check
  // n == 1: print only one line
  // cur pos < n: append a line
  // replace starting string if empty
  // else, append
  // cur pos == n: append last line and return
}

module.exports = steps;
