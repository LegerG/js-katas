/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.

If the string or the character is null, return -1.
If the character length is other than 1, return -1.

Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1

Add you own tests.

*/

// Use https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function countChar(string, char) {
  if (!string || !char || char.length !== 1) {
    return -1;
  }

  return string.split("").reduce((count, currentChar) => {
    return currentChar === char ? count + 1 : count;
  });
}

module.exports = countChar;
