/**
 * Unicode Steganography
 * https://www.codewars.com/kata/67d3e77a0eed0a4f4b89ea9f/train/javascript
 *
 */

function decodeHiddenData(str) {
  let decoded = ''

  for (const char of str) {
    const code = `0x${char.codePointAt().toString(16).toUpperCase()}`

    if (code >= 0xe0020) {
      decoded += String.fromCodePoint(code - 0xe0100)
    }
  }

  return decoded
}

function encodeHiddenData(visibleText, hiddenData) {
  let encodedMessage = ''

  for (let char of hiddenData) {
    encodedMessage += String.fromCodePoint(char.charCodeAt() + 0xe0100)
  }

  return visibleText + encodedMessage
}
