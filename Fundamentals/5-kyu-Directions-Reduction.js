/**
 * Directions Reduction
 * https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 *
 */

const dirReduc = arr => {
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  }

  const res = []

  for (const dir of arr) {
    opposites[dir] === res[res.length - 1] ? res.pop() : res.push(dir)
  }

  return res
}
