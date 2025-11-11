/**
 * T.T.T. #8: Reverse all
 * https://www.codewars.com/kata/576967bbb8ed4a7bca0015c1/train/javascript
 *
 */

const reverseString = str => {
  const segments = str.match(/[a-z]+|\d+|[^a-z0-9]+/gi) || []
  return segments.map(segment => [...segment].reverse().join('')).join('')
}

const reverseAll = arr =>
  [...arr]
    .reverse()
    .map(s => s.split('\n').reverse().map(reverseString).join('\n'))
