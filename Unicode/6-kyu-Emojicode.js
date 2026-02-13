/**
 * Emojicode
 * https://www.codewars.com/kata/66279e3bcb95174d2f9cf050/train/javascript
 *
 */

function toEmojicode(emojis) {
  let res = []

  for (let emoji of emojis) {
    const code = [...emoji.codePointAt().toString()]
      .map(n => String.fromCodePoint('0x003' + n, 0xfe0f, 0x20e3))
      .join('')

    res.push(code)
  }

  return res.join(' ')
}

function toEmojis(emojicode) {
  let res = ''

  for (let code of emojicode.split(' ')) {
    let emoji = ''

    for (let n of code) {
      const val = '0x' + n.codePointAt().toString(16).padStart(4, '0')

      if (val < 0x0040) {
        emoji += val - 0x0030
      }
    }

    res += String.fromCodePoint(emoji)
  }

  return res
}
