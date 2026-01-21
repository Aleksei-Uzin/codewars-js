/**
 * Password generator
 * https://www.codewars.com/kata/58ade2233c9736b01d0000b3/train/javascript
 *
 */

const passwordGen = () => {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const digits = '0123456789'
  const allChars = lower + upper + digits

  const charLen = getRandom(6, 20)
  const pass = [
    lower[getRandom(0, lower.length - 1)],
    upper[getRandom(0, upper.length - 1)],
    digits[getRandom(0, digits.length - 1)],
  ]

  for (let i = pass.length; i < charLen; i++) {
    pass.push(allChars[getRandom(0, allChars.length - 1)])
  }

  return pass.sort(() => Math.random() - 0.5).join('')
}

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)
