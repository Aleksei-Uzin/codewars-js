/**
 * Fix My Circles
 * https://www.codewars.com/kata/68332539defbf760434582d1/train/javascript
 *
 */

const circleMender = content =>
  content.replace(/\#.+\#/g, m => '#'.repeat(m.length))
