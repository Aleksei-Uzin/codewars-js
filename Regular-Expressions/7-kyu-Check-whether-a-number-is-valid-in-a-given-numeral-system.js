/**
 * Check whether a number is valid in a given numeral system
 * https://www.codewars.com/kata/67757660c552a3a7ef9aaceb/train/javascript
 *
 */

const validateBase = (num, base) => {
  const set = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const reg = new RegExp('^[' + set.slice(0, base) + ']+$')

  return reg.test(num)
}
