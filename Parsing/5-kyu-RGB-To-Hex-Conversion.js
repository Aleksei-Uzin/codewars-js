/**
 * RGB To Hex Conversion
 * https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
 *
 */

const rgb = (r, g, b) =>
  [r, g, b]
    .map(val => sanitizeVal(val).toString(16).padStart(2, 0).toUpperCase())
    .join('')

const sanitizeVal = val => (val < 0 ? 0 : val > 255 ? 255 : val)
