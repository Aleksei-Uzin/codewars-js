/**
 * T.T.T.#4: Key of door
 * https://www.codewars.com/kata/57530135aeb792ba42000620/train/javascript
 *
 */

const findKey = nums => {
  const numStr = nums.map(String)
  const numLen = numStr[0].length
  let key = ''

  for (let i = 0; i < numLen; i++) {
    const digits = numStr.map(s => s[i])
    key += digits.find(d => digits.indexOf(d) === digits.lastIndexOf(d))
  }

  return key
}
