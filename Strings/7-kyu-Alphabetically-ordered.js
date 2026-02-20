/**
 * Alphabetically ordered
 * https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript
 *
 */

const alphabetic = s => {
  let code = 0

  for (let c of s) {
    const temp = c.charCodeAt()

    if (temp < code) return false
    else code = temp
  }

  return true
}
