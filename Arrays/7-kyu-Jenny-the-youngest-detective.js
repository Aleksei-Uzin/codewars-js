/**
 * Jenny the youngest detective
 * https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript
 *
 */

const missingWord = (nums, str) => {
  const chars = str.match(/[a-z]/gi) || []
  const sorted = [...nums].sort((a, b) => a - b)
  let res = ''

  for (let n of sorted) {
    if (!chars[n]) return 'No mission today'

    res += chars[n].toLowerCase()
  }

  return res
}
