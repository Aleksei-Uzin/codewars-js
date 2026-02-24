/**
 * Map over a list of lists
 * https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript
 *
 */

const gridMap = (fn, a) => a.map(l => l.map(fn))
