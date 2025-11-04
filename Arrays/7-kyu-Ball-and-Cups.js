/**
 * Ball and Cups
 * https://www.codewars.com/kata/5b715fd11db5ce5912000019/train/javascript
 *
 */

const cupAndBalls = (b, arr) =>
  arr.reduce((acc, [n1, n2]) => {
    if (n1 === acc) return n2
    else if (n2 === acc) return n1
    else return acc
  }, b)
