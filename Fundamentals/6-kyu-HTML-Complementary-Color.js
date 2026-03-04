/**
 * HTML Complementary Color
 * https://www.codewars.com/kata/56be4affc5dc03b84b001d2d/train/javascript
 *
 */

const getReversedColor = hexColor => {
  if (!/^[0-9a-f]{0,6}$/i.test(hexColor)) throw new TypeError()

  const fullHex = hexColor.padStart(6, '0')
  const decValue = parseInt(fullHex, 16)
  const complement = 0xffffff - decValue
  const res = complement.toString(16).padStart(6, '0').toUpperCase()

  return `#${res}`
}
