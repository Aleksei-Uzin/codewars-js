/**
 * Is There an Odd Bit?
 * https://www.codewars.com/kata/5d6f49d85e45290016bf4718/train/javascript
 *
 */

const anyOdd = x => ((x & 0xAAAAAAAA) !== 0 ? 1 : 0)
