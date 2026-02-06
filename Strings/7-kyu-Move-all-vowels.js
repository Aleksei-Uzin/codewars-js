/**
 * Move all vowels
 * https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript
 *
 */

const moveVowel = (str, v = '') =>
  str.replace(/[aeiou]/g, m => ((v += m), '')) + v
