/**
 * Create a frame!
 * https://www.codewars.com/kata/5672f4e3404d0609ec00000a/train/javascript
 *
 */

const frame = (text, char) => {
  const wordsLen = text.map(t => t.length)
  const maxWordLen = Math.max(...wordsLen)
  const line = char.repeat(maxWordLen + 4)
  const res = [line]

  for (let i = 0; i < text.length; i++) {
    res.push(`${char} ${text[i].padEnd(maxWordLen, ' ')} ${char}`)
  }

  res.push(line)

  return res.join('\n')
}
