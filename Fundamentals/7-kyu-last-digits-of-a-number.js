/**
 * last digits of a number
 * https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/train/javascript
 *
 */

const lastDigit = (n, d) =>
  d > 0 ? [...n.toString()].slice(-d).map(Number) : []
