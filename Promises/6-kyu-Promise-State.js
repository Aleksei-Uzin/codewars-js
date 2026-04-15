/**
 * Promise State
 * https://www.codewars.com/kata/6534ea9defdd85005848c2bd/train/javascript
 *
 */

function getState(promise) {
  return Promise.race([promise, Promise.resolve('pending')])
    .then(result => (result === 'pending' ? 'pending' : 'fulfilled'))
    .catch(() => 'rejected')
}
