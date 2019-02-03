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
  // const chunks = [];
  // for (let i = 0; i < array.length; i++) {
  //   // innerCount explanation
  //   // essentially, innerCount must go from 1 to size
  //   // using modulo ensures that we stay within the
  //   // limits of size
  //   // but this makes innerCount 0 when innerCount
  //   // should be equal to size
  //   // hence the || operator corrects this
  //   const innerCount = (i + 1) % size || size;
  //   if (innerCount === 1) chunks.push([]);
  //   const indexOfCurrentChunk = chunks.length - 1;
  //   const remSpace = size - innerCount;
  //   const remElemsCanFitIntoChunk =
  //     remSpace > 0 && array.length - 1 - i === remSpace;
  //   if (remElemsCanFitIntoChunk) {
  //     chunks[indexOfCurrentChunk].push(...array.slice(i));
  //     break;
  //   } else {
  //     chunks[indexOfCurrentChunk].push(array[i]);
  //   }
  // }
  //
  // return chunks;

  // SOLUTION TWO
  // progressively cut down the array into chunks
  // according to size
  // check if length of array is greater than size
  // if it is, cut out size number of element and
  // place in outer array
  // if it's not, place everything in outer array
  // .splice() method does exactly this
  // const result = [];
  //
  // do {
  //   result.push(array.splice(0, size));
  // } while (array.length > size);
  //
  // // add the remaining piece if some values are left
  // if (array.length > 0) result.push(array.splice(0, size));
  //
  // return result;

  // Stephen's first solution
  // this is essentially a neater and more readable
  // version of my first solution
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
