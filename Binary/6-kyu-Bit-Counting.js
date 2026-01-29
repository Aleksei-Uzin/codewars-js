/**
 * Bit Counting
 * https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
 *
 */

const countBits = n => [...n.toString(2)].filter(b => b === '1').length
