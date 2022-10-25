/*
A palindrome is a word or a phrase that reads the same backwards as forwards, example. madam.

Create a function `isPalindrome` that returns if a word is a palindrome.

This function must not be case sensitive.

If the word is null or empty, return true.

Example:
* "rotor" -> true
* "tacos" -> false
* "Kayak" -> true
* null -> true

Add you own tests.

*/

function isPalindrome(word) {
  if (!word) {
    return true;
  }

  return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

module.exports = isPalindrome;
