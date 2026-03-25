/**
 * Basics 04: Rotate Matrix
 * https://www.codewars.com/kata/56b5dd1702a30326ce000b02/train/javascript
 *
 */

const rotateMatrix = matrix => {
  const col = matrix[0].length

  return Array.from({ length: col }, (_, i) =>
    matrix.map(row => row[col - 1 - i]),
  )
}
