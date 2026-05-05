/**
 * Number encrypting: decypher
 * https://www.codewars.com/kata/57b2fc418491f9f092000029/train/javascript
 *
 */

const decypher = str => {
  const setUpper = ['O', 'I', 'R', 'E', 'A', 'S', 'G', 'T', 'B']
  const setLower = ['o', 'l', 'z', 'e', 'a', 's', 'b', 't', , 'g']
  const isLower = (res, i) => {
    if (i === 0) return false
    if (/[a-z\-]/i.test(res[i - 1])) return true
    if (/\s/.test(res[i - 1]) && /[^\.]/i.test(res[i - 2])) {
      if (i === str.length - 1) return false
      if (/[a-z\d]/.test(str[i + 1])) return true
    }
  }
  let res = ''

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (/\d/.test(char)) res += isLower(res, i) ? setLower[char] : setUpper[char]
    else res += char
  }

  return res
}
