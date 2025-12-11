/**
 * For want of a symbol
 * https://www.codewars.com/kata/5553199b76990c4b3e000031/train/javascript
 *
 */

function For() {
  return [
    '{ var i, N=20; for (i = 0 ; i < N ; N--) { PrintStar(); } }',
    '{ var i, N=20; for (i = 0 ; i + N ; i--) { PrintStar(); } }',
    '{ var i, N=20; for (i = 0 ;-i < N ; i--) { PrintStar(); } }',
  ]
}
