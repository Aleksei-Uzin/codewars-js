/**
 * T.T.T.27: Four piles of apples
 * https://www.codewars.com/kata/57aae4facf1fa57b3300005d/train/javascript
 *
 * (x + y) + (x - y) + (x * y) + (x / y) = n
 *  (x + y) + (x - y) => 2x
 * 2x + (x * y) + (x / y) = n
 * 2x + x(y + 1/y) = n
 * x(2 + y + 1/y) = n
 * x = n / (2 + y + 1/y)
 * x = n * y / (2y + y^2 + 1)
 *
 */

const fourPiles = (n, y) => {
  const x = (n * y) / (2 * y + y ** 2 + 1)
  const res = [x + y, x - y, x * y, x / y]

  return res.every(n => n > 0 && Number.isInteger(n)) ? res : []
}
