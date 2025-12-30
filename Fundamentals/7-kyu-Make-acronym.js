/**
 * Make acronym
 * https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript
 *
 */

const toAcronym = inp =>
  inp
    .split(' ')
    .map(word => word.slice(0, 1))
    .join('')
    .toUpperCase()
