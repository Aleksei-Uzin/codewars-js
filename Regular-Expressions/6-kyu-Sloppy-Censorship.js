/**
 * Sloppy Censorship
 * https://www.codewars.com/kata/5827a4f5ffe0cbcbe600009f/train/javascript
 *
 */

const censor = memoir =>
  memoir.replace(/\b[\dA-Z][\w\.\']+/g, m => m.replace(/[\da-z\.\']/g, '_'))
