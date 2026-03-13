/**
 * Framed Reflection
 * https://www.codewars.com/kata/581331293788bc1702001fa6/train/javascript
 *
 */

const mirror = text => {
  const words = text.split(' ')
  const nums = words.map(w => w.length)
  const maxLen = Math.max(...nums)
  const edge = '*'.repeat(maxLen + 4)
  const res = [edge]

  for (let word of words) {
    const reversed = [...word].reverse().join('')
    const line = `* ${reversed}`.padEnd(maxLen + 3)
    res.push(`${line}*`)
  }

  res.push(edge)

  return res.join('\n')
}
