/**
 * KISS - Keep It Simple Stupid
 * https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript
 *
 */

const isKiss = str => {
  const words = str.match(/\b\w+/g) || []
  const isSimple = words.every(word => word.length <= words.length)

  return isSimple ? 'Good work Joe!' : 'Keep It Simple Stupid'
}
