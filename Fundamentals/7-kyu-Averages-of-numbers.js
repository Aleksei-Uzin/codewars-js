/**
 * Averages of numbers
 * https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript
 *
 */

const averages = nums => {
  const res = []

  for (let i = 0; i < (nums || []).length - 1; i++) {
    const avg = (nums[i] + nums[i + 1]) / 2
    res.push(avg)
  }

  return res
}
