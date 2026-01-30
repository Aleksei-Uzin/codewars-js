/**
 * Sort Out The Men From Boys
 * https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
 *
 */

const menFromBoys = arr => {
  const set = [...new Set(arr)]
  const even = set.filter(n => Math.abs(n) % 2 === 0).sort((a, b) => a - b)
  const odd = set.filter(n => Math.abs(n) % 2 === 1).sort((a, b) => b - a)

  return even.concat(odd)
}
