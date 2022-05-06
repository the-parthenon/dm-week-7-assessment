// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

let nums = [1, 2, 3];

const sumZero = (arr) => {
  let zero = false;

  //nested for-loops is going to give this function a time complexity of O(n^2)
  //space complexity is O(1), the only new data we're producing is the Boolean for the zero variable.
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0 && i !== j) {
        zero = true;
      }
    }
  }
  return zero;
};

console.log(sumZero(nums));
