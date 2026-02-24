/**
 * Length of missing array
 * https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript
 *
 */

const getLengthOfMissingArray = arrayOfArrays => {
  if (!arrayOfArrays || arrayOfArrays.some(a => !a)) return 0

  const sorted = [...arrayOfArrays].sort((a, b) => a.length - b.length)

  for (let i = 0; i < sorted.length; i++) {
    const lenCurr = sorted[i].length
    const lenNext = sorted[i + 1].length

    if (lenCurr === 0) return 0
    if (lenCurr + 1 !== lenNext) return lenCurr + 1
  }

  return 0
}
