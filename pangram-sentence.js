// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

const isPangram = (str) => {
  let lowerStr = str.toLowerCase();
  let letterCheck = lowerStr.match(/[a-z]/g);
  letterCheck = [...new Set(letterCheck)];
  return letterCheck.length === 26;
};

//This solution is based on the length of the string that is passed in, so has a time complexity of O(n)
//For space complexity, we are storing values equal to the passed-in string, so O(n)

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// // -> True

console.log(isPangram('I like cats, but not mice'));
// // -> False
