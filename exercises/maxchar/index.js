// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // at the very end I need a structured count of each letter's freq
  // sorting embeds this count in the arrangement of letters
  // manually counting for each character simply generates the count
  // challenge is how to efficiently create this structure

  // SOLUTION ONE
  // sorting gives max sorting performance, which may vary depending
  // on the sorting algo used
  // after the sort, only one run through the chars is needed
  // i.e. time complexity = n

  // SOLUTION TWO
  // manually running through the string requires a separate run
  // through the entire string for each char

  // SOLUTION THREE
  // another way is to track the counts in an array
  // this way, the tracking array contains as many unique elements
  // as there are in the string
  // then when all is said and done, the array is reduced to the
  // letter with the max count

  // PERF comparison
  // sorting runs through the characters more than n times (> n),
  // then the final run is also n, so guaranteed > 2n
  // manual count will have an n outer run, and each inner run
  // will be n - 1. Feels like n! but I'm not certain
  // final solution only runs through string once, then reduces the
  // tracking array in <= n. The reduction is n only if each char is
  // unique, otherwise it's less. This comes out to n < x <= 2n
  // so we have one with >2n, n!, and n < x <= 2n.
  // I choose the third!
  // on enhancing the third, I can make each addition delete records
  // for a char that cannot beat the max based on chars remaining
  // this requires determining the max for the current array, which
  // is the same step as the final one.
  // Repeating it at every step of the way makes this inefficient.
  // Scrap that enhancement!
  // How about memory complexity?
  // the first method is efficient because of the sort, and it will
  // only need 2 temp vars to track the current letter and its freq
  // in addition to the looping constructs
  // the second method similarly only needs 2 temp vars
  // the third needs an array with a variable length (depending
  // on the length of the string)
  // the third may have an issue with large strings but I'm not
  // certain
  // I didn't account for all the lookups required at each step of
  // the iteration, so I'm not certain of my previous analysis.
  // const tracker = [],
  //   charCounts = [];
  // let curCharIndex;
  // for (char of str) {
  //   curCharIndex = tracker.indexOf(char);
  //   if (curCharIndex < 0) {
  //     // the char wasn't found
  //     tracker.push(char);
  //     charCounts.push({ char, count: 1 });
  //   } else {
  //     // the char was found
  //     charCounts[curCharIndex].count++;
  //   }
  // }
  //
  // // find the max
  // const maxChar = charCounts.reduce((maxCharObj, charObj) => {
  //   return charObj.count > maxCharObj.count ? charObj : maxCharObj;
  // });
  //
  // return maxChar.char;

  // Stephen's solution
  const chars = Object.create(null);
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  let max;
  for (let char in chars) {
    // the inner condition always returns undefined
    // at that point max must be set to char
    max = (chars[char] > chars[max] ? char : max) || char;
  }

  return max;
}

module.exports = maxChar;
