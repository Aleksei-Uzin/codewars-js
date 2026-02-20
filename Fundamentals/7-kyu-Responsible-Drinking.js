/**
 * Responsible Drinking
 * https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
 *
 */

const hydrate = s => {
  const drinks = s.match(/\d+/g) || []
  const sum = drinks.reduce((acc, n) => acc + parseInt(n), 0)

  return `${sum} glass${sum > 1 ? 'es' : ''} of water`
}
