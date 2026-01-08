/**
 * Apparently-Modifying Strings
 * https://www.codewars.com/kata/5b049d57de4c7f6a6c0001d7/train/javascript
 *
 */

const apparently = str =>
  str.replace(/(and|but)\b(?! apparently\b)/gi, m => `${m} apparently`)
