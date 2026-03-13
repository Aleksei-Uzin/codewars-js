/**
 * Least Common Multiple
 * https://www.codewars.com/kata/5259acb16021e9d8a60010af/train/javascript
 *
 */

const lcm = (...numbers) => {
  if (numbers.length === 0) return 1

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
  const lcm = (a, b) => (a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b))

  return numbers.reduce((acc, n) => lcm(acc, n))
}
