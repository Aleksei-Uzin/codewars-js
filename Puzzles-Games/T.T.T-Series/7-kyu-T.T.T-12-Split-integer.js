/**
 * T.T.T.12: Split integer
 * https://www.codewars.com/kata/5776600afc8cd670130000df/train/javascript
 *
 */

const splitInt = n => {
  if (n === 2) return 1
  if (n === 3) return 2

  if (n % 3 === 0) {
    return Math.pow(3, n / 3)
  } else if (n % 3 === 1) {
    return Math.pow(3, (n - 4) / 3) * 4
  } else {
    return Math.pow(3, (n - 2) / 3) * 2
  }
}

/**
 * Best Practice
 */
function splitInt(n) {
  return n <= 6 ? [0, 0, 1, 2, 4, 6, 9][n] : 3 * splitInt(n - 3)
}
