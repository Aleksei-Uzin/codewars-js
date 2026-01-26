/**
 * Moving Zeros To The End
 * https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 *
 */

const moveZeros = arr =>
  arr.sort((a, b) => {
    if (a === 0 && b !== 0) return 1
    else if (a !== 0 && b === 0) return -1
    else return 0
  })

/**
 * Best Practice
 */
function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0))
}
