/**
 * Basics 03: Strings, Numbers and Calculation
 * https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript
 *
 */

const calculateString = st => {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }
  const [_, n1, op, n2] = st
    .replace(/[^\d\+\-\*\/\.]/g, '')
    .match(/([\d.]+)([*+/-])([\d.]+)/)
  const res = ops[op](parseFloat(n1), parseFloat(n2))

  return Math.round(res).toString()
}
