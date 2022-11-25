/*
Create a function `factorization` which returns the array of prime number which are factors of the input integer

https://en.wikipedia.org/wiki/Integer_factorization

5 = [[5, 1]] = 5
25 = [[5, 2]] = 5^2 
125 = [[5, 3]] = 5^3
360 = [[2, 3], [3, 2], [5, 1]] = 2^3 * 3^2 * 5
1 001 = [[7, 1], [11, 1], [13, 1]] = 7 * 11 * 13
1 010 021 = [[17, 1], [19, 1], [53, 1], [59, 1]] = 17 * 19 * 53 * 59

*/

function nbrPremier(nbr) {
  if (nbr < 2) return false;
  for (let i = 2; i <= Math.sqrt(nbr); i++) if (nbr % i === 0) return false;
  return true;
}

function factorization(num) {
  const divisorArr = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && nbrPremier(i) === true) {
      divisorArr.push(i);
    }
  }
  let newNbr = num;
  const nbrDivision = [];
  for (let j = 0; j < divisorArr.length; j++) {
    const divisor = divisorArr[j];
    let counter = 0;
    while (newNbr % divisor === 0) {
      newNbr /= divisor;
      counter++;
    }
    nbrDivision.push(counter);
  }
  const result = divisorArr.map((elt, index) => [elt, nbrDivision[index]]);
  return result;
}

// TODO add your code here

module.exports = factorization;
