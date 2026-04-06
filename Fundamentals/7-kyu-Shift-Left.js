/**
 * Shift Left
 * https://www.codewars.com/kata/5bdc191306a8a678f6000187/train/javascript
 *
 */

const shiftLeft = (s, t) => {
  let n = 0

  for (; s !== t; n++) {
    if (s.length >= t.length) s = s.slice(1)
    else t = t.slice(1)
  }

  return n
}
