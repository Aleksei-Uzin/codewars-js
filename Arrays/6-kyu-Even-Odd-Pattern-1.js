/**
 * Even Odd Pattern #1
 * https://www.codewars.com/kata/559e708e72d342b0c900007b/train/javascript
 *
 */

const EvenOdd = arr => arr.reduce((acc, n, i) => (i % 2 ? acc * n : acc + n), 0)
