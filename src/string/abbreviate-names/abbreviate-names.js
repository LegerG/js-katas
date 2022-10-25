/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

// Use https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function abbreviate(name) {
  if (!name) {
    return "";
  }

  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

module.exports = abbreviate;
