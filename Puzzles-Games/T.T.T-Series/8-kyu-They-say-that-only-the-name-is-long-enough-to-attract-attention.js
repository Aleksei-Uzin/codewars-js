/**
 * They say that only the name is long enough to attract attention.
 * They also said that only a simple Kata will have someone to solve it.
 * This is a sadly story #1: Are they opposite?
 *
 * https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
 *
 */

const isOpposite = (s1, s2) => {
  const len1 = s1.length
  const len2 = s2.length

  if (!len1 || len1 !== len2) return false

  for (let i = 0; i < len1; i++) {
    const code1 = s1[i].charCodeAt()
    const code2 = s2[i].charCodeAt()

    if (Math.abs(code1 - code2) !== 32) return false
  }

  return true
}
