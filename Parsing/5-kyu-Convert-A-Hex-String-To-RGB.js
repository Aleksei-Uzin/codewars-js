/**
 * Convert A Hex String To RGB
 * https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
 *
 */

const hexStringToRGB = hexStr => {
  const rgb = hexStr.match(/[0-9a-f]{2}/gi) || []
  const [r, g, b] = rgb.map(val => parseInt(val, 16))

  return { r, g, b }
}
