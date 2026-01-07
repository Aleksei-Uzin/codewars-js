/**
 * Format to the 2nd
 * https://www.codewars.com/kata/58311faba317216aad000168/train/javascript
 *
 */

const printNums = (...args) => {
  const max = Math.max(...args)
  const len = String(max).length

  return args.map(n => String(n).padStart(len, '0')).join('\n')
}
