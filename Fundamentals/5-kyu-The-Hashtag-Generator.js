/**
 * The Hashtag Generator
 * https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
 *
 */

const generateHashtag = str => {
  const words = str.match(/\b[a-z]+\b/gi) || []
  let res = '#'

  if (!words.length) return false

  for (let word of words) {
    res += word.replace(/^./, m => m.toUpperCase())
  }

  return res.length > 140 ? false : res
}
