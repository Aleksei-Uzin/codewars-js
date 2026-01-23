/**
 * Find the missing letter
 * https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 *
 */

const findMissingLetter = ([firstLetter, ...letters]) => {
  let code = firstLetter.charCodeAt()

  for (let l of letters) {
    const currCode = l.charCodeAt()

    if (currCode !== code + 1) {
      return String.fromCharCode(code + 1)
    } else {
      code = currCode
    }
  }

  return 'No one letter was missed'
}
