// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // SOLUTION ONE
  // create the outer array
  // loop through the original array, checking if
  // (i + 1) % size is 1 (call this innerCount)
  // this would mean that a new chunk should be created
  // by pushing a new array to the outer array
  // then check to see if length - 1 - iterator equals
  // size - innerCount (i.e. the remaining num of
  // elements is the num of elements needed to fill the
  // current chunk)
  // if true, slice the original array from the
  // iterator to the end and spread it into the current
  // chunk as given by length of original array - 1
  // else, the current value in the array is added to
  // the current chunk
  const chunks = [];
  for (let i = 0; i < array.length; i++) {
    // inner count explanation
    // using modulo ensures that we stay within the
    // limits of size
    // but this makes innerCount 0 when innerCount
    // should be equal to size
    // hence the || operator corrects this
    const innerCount = (i + 1) % size || size;
    if (innerCount === 1) chunks.push([]);
    const indexOfCurrentChunk = chunks.length - 1;
    const remSpace = size - innerCount;
    const remElemsCanFitIntoChunk =
      remSpace > 0 && array.length - 1 - i === remSpace;
    if (remElemsCanFitIntoChunk) {
      chunks[indexOfCurrentChunk].push(...array.slice(i));
      break;
    } else {
      chunks[indexOfCurrentChunk].push(array[i]);
    }
  }

  return chunks;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
chunk(arr, 2);

module.exports = chunk;
