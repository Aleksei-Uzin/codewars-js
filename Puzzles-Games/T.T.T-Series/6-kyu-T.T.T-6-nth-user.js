/**
 * T.T.T.#6: nth user
 * https://www.codewars.com/kata/5768b217b8ed4a77c0000c46/train/javascript
 *
 */

const userNumber = n =>
  n
    .toString(8)
    .split('')
    .map(d => (d >= 4 ? parseInt(d) + 1 : d))
    .join('')

/**
 * Best Practice
 */
function userNumber(n) {
  return n.toString(8).replace(/[4567]/g, c => +c + 1)
}
