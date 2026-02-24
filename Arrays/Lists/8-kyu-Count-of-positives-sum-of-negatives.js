/**
 * Count of positives / sum of negatives
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
 *
 */

const countPositivesSumNegatives = input => {
  if (!input || !input.length) return []

  return input.reduce(
    ([cal, neg], n) => (n > 0 ? [cal + 1, neg] : [cal, neg + n]),
    [0, 0]
  )
}
