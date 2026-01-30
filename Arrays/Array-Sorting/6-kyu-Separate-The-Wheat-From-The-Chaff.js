/**
 * Separate The Wheat From The Chaff
 * https://www.codewars.com/kata/5bdcd20478d24e664d00002c/train/javascript
 *
 */

function wheatFromChaff(arr) {
  const copy = arr.concat()
  let lastNegInd = copy.length

  for (let i = 0; i < copy.length; i++) {
    if (copy[i] > 0) {
      lastNegInd = getLastNegativeInd(copy, lastNegInd)

      if (lastNegInd > i) {
        const tempVal = copy[i]
        copy[i] = copy[lastNegInd]
        copy[lastNegInd] = tempVal
      }
    }
  }

  return copy
}

function getLastNegativeInd(arr, lastInd) {
  for (let i = lastInd - 1; i >= 0; i--) {
    if (arr[i] < 0) return i
  }

  return -1
}
