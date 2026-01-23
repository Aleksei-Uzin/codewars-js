/**
 * ASCII hex converter
 * https://www.codewars.com/kata/52fea6fd158f0576b8000089/train/javascript
 *
 */

class Converter {
  static toAscii(hex) {
    const arr = hex.match(/[0-9a-f]{2}/gi) || []

    return arr.reduce(
      (acc, val) => acc.concat(String.fromCodePoint(parseInt(val, 16))),
      '',
    )
  }

  static toHex(ascii) {
    return Array.from(ascii)
      .map(ch => ch.charCodeAt().toString(16).padStart(2, '0'))
      .join('')
  }
}

/**
 * Best Practice
 */
var Converter = {
  toAscii: function (hex) {
    return Buffer.from(hex, 'hex').toString('ascii')
  },
  toHex: function (ascii) {
    return Buffer.from(ascii, 'ascii').toString('hex')
  },
}
