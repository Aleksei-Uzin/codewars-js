/**
 * Regexp Basics - is it a eight bit signed number?
 * https://www.codewars.com/kata/567ed73340895395c100002e/train/javascript
 *
 */

String.prototype.signedEightBitNumber = function () {
  if (!/^(0|-?[1-9]\d*)$/.test(this)) return false

  const num = parseInt(this)
  return num >= -128 && num <= 127
}
