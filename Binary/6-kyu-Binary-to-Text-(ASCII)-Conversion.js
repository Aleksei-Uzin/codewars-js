/**
 * Binary to Text (ASCII) Conversion
 * https://www.codewars.com/kata/5583d268479559400d000064/train/javascript
 *
 */

const binaryToString = binary => {
  const arr = binary.match(/[01]{8}/g) || []
  const chars = arr.map(bin => String.fromCharCode(parseInt(bin, 2)))

  return chars.join('')
}
