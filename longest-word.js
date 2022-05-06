// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

const findLongestWord = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > result) {
      result = arr[i].length;
    }
  }
  return result;
};
//single loop this time, time complexity of O(n)
//space complexity is O(1) because the only new values we're assigning is a single Integer for the result.

console.log(findLongestWord(['hallooooo', 'hi', 'hello']));
// // -> 5
