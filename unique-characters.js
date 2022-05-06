// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

const hasUniqueChars = (word) => {
  let unique = true;
  //this one also has nested for loops and a runtime complexity of O(n^2)
  //space complexity: O(1), as the only new data we're producing is the Boolean for the unique variable.
  for (i = 0; i < word.length; i++) {
    for (j = i + 1; j < word.length; j++) {
      if (word[j] === word[i]) {
        unique = false;
      }
    }
  }
  return unique;
};

console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));
