/**
 * Next Featured Number Higher than a Given Value
 * https://www.codewars.com/kata/56abc5e63c91630882000057/train/javascript
 *
 */

const nextNumb = val => {
  let res = val + 1

  while (res % 3 !== 0) res++
  if (res % 2 === 0) res += 3

  while (res < 9999999999) {
    const str = res.toString()
    if (new Set(str).size === str.length) {
      return res
    }
    res += 6
  }

  return 'There is no possible number that fulfills those requirements'
}
