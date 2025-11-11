/**
 * T.T.T. #9: Peaks and valleys
 * https://www.codewars.com/kata/5769e0db6a3efea1b1000010/train/javascript
 *
 */

const peakAndValley = arr => {
  const res = []

  for (let i = 3; i < arr.length - 3; i++) {
    const segment = [...arr.slice(i - 3, i), ...arr.slice(i + 1, i + 4)]
    const elem = arr[i]

    if (segment.every(n => n < elem) || segment.every(n => n > elem))
      res.push(elem)
  }

  return res
}
