/**
 * Remove the minimum
 * https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
 *
 */

const removeSmallest = numbs => {
  const min = Math.min(...numbs)
  const ind = numbs.indexOf(min)

  return numbs.filter((_, i) => i !== ind)
}
