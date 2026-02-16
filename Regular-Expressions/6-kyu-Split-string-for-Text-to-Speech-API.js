/**
 * Split string for Text-to-Speech API
 * https://www.codewars.com/kata/579bed0e72292d32c8000084/train/javascript
 *
 */

const splitText = (text, max) =>
  text.match(new RegExp(`\\w.{0,${max - 1}}(?=\\s|$)`, 'g')) || []
