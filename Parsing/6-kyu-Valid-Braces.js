/**
 * Valid Braces
 * https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
 *
 */

const validBraces = braces => {
  if (!braces.length) return true
  if (!/\(\)|\[\]|\{\}/.test(braces)) return false

  return validBraces(braces.replace(/\(\)|\[\]|\{\}/g, ''))
}
