/**
 * Wealth equality, finally!
 * https://www.codewars.com/kata/5815f7e789063238b30001aa/train/javascript
 *
 */

const redistributeWealth = wealth => {
  const sum = wealth.reduce((acc, n) => acc + n, 0)
  const res = sum / wealth.length
  wealth.forEach((_, i, arr) => {
    arr[i] = res
  })
}
