/**
 * UniDecoder
 * https://www.codewars.com/kata/57366eaae7f8d2df290003e8/train/javascript
 *
 */

const uniDecoder = (...args) => {
  let res = ''

  for (let val of args) {
    if (typeof val === 'number') res += String.fromCharCode(val)
  }

  return res || 'not a valid character code'
}
