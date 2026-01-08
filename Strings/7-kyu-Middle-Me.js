/**
 * Middle Me
 * https://www.codewars.com/kata/59cd155d1a68b70f8e000117/train/javascript
 *
 */

const middleMe = (N, X, Y) =>
  N % 2 === 0 ? `${Y.repeat(N / 2)}${X}${Y.repeat(N / 2)}` : X
