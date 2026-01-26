/**
 * Array2Binary addition
 * https://www.codewars.com/kata/559576d984d6962f8c00003c/train/javascript
 *
 */

const arr2bin = arr => {
  let sum = 0

  for (let n of arr) {
    if (Number.isInteger(n)) sum += n
    else return false
  }

  return sum.toString(2)
}
