/**
 * Symbols counted
 * https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c/train/javascript
 *
 */

const transform = s => {
  let res = ''

  for (let char of s) {
    if (!res.includes(char)) {
      const reg = new RegExp(char, 'g')
      const n = (s.match(reg) || []).length
      res += `${char}${n > 1 ? n : ''}`
    }
  }

  return res
}
