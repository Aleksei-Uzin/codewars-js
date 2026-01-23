/**
 * Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
 *
 */

function snail(arr) {
  let top = 0
  let bottom = arr.length - 1
  let left = 0
  let right = arr[0].length - 1

  const res = []

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i])
    }
    top++

    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][right])
    }
    right--

    for (let i = right; i >= left; i--) {
      res.push(arr[bottom][i])
    }
    bottom--

    for (let i = bottom; i >= top; i--) {
      res.push(arr[i][left])
    }
    left++
  }

  return res
}
