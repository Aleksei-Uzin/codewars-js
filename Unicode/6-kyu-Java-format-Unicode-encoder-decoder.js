/**
 * Java format Unicode encoder/decoder
 * https://www.codewars.com/kata/58e2c062542a419083000033/train/javascript
 *
 */

class JavaUnicodeEncoder {
  static decode(input) {
    const codeUnits = input.match(/[0-9a-f]{4}/gi).map(code => `0x${code}`)

    return String.fromCodePoint(...codeUnits)
  }

  static encode(input) {
    let encoded = ''

    for (let i = 0; i < input.length; i++) {
      const code = input[i].charCodeAt().toString(16).padStart(4, '0')
      encoded += `\\u${code}`
    }

    return encoded
  }
}
