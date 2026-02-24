/**
 * Lario and Muigi Pipe Problem
 * https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
 *
 */

const pipeFix = numbs => {
  const res = []

  for (let i = numbs[0]; i <= numbs[numbs.length - 1]; i++) {
    res.push(i)
  }

  return res
}
