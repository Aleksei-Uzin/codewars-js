/**
 * Recycle!
 * https://www.codewars.com/kata/59fb783bab11f89202001083/train/javascript
 *
 */

const recycleMe = recycle =>
  recycle.reduce(
    (acc, n) => {
      if (n > 0) acc[0] += 1
      else if (n < 0) acc[1] += 1
      else acc[2] += 1
      return acc
    },
    [0, 0, 0]
  )
