/**
 * T.T.T.#5: Only you
 * https://www.codewars.com/kata/5762592d784ead628a0000dd/train/javascript
 *
 */

const onlyYou = s => !/i|[mhw]e|him|the[my]/i.test(s) && /y.*o.*u/i.test(s)
