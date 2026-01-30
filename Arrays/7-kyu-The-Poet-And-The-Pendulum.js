/**
 * The Poet And The Pendulum
 * https://www.codewars.com/kata/5bd776533a7e2720c40000e5/train/javascript
 *
 */

const pendulum = values => {
  const sorted = values.sort((a, b) => a - b)
  const res = []

  for (let i = 0; i < sorted.length; i++) {
    if (i % 2 === 0) res.unshift(sorted[i])
    else res.push(sorted[i])
  }

  return res
}
