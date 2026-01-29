/**
 * Sum Strings as Numbers
 * https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
 *
 */

const sumStrings = (a, b) => {
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0
  let res = ''

  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0) + carry
    res = (sum % 10) + res
    carry = Math.floor(sum / 10)
  }

  return res.replace(/^0+/, '')
}
