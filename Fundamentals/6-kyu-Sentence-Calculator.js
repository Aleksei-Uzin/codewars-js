/**
 * Sentence Calculator
 * https://www.codewars.com/kata/5970fce80ed776b94000008b/train/javascript
 *
 */

const lettersToNumbers = s => {
  let res = 0

  for (let char of s) {
    if (/[a-z]/.test(char)) {
      res += char.codePointAt() - 96
    } else if (/[A-Z]/.test(char)) {
      res += (char.codePointAt() - 64) * 2
    } else if (/[0-9]/.test(char)) {
      res += parseInt(char)
    }
  }

  return res
}
