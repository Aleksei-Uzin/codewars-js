/**
 * De-Emojify
 * https://www.codewars.com/kata/6627696c86b953001280675e/train/javascript
 *
 */

const deEmojify = emojiString => {
  const emotes = {
    ':)': '0',
    ':D': '1',
    '>(': '2',
    '>:C': '3',
    ':/': '4',
    ':|': '5',
    ':O': '6',
    ';)': '7',
    '^.^': '8',
    ':(': '9',
  }

  return emojiString
    .replace(/\S+\s?/g, m => emotes[m.trim()])
    .replace(/\d+\s?/g, m => String.fromCharCode(m))
}
