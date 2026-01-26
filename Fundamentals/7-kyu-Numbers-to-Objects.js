/**
 * Numbers to Objects
 * https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript
 *
 */

const numObj = s => s.map(code => ({ [code]: String.fromCodePoint(code) }))
