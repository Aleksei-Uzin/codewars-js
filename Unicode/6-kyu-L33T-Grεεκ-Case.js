/**
 * (L33T + Grεεκ) Case
 * https://www.codewars.com/kata/556025c8710009fc2d000011/train/javascript
 *
 */

const GrεεκL33t = str => {
  const abc = {
    a: 'α',
    b: 'β',
    d: 'δ',
    e: 'ε',
    i: 'ι',
    k: 'κ',
    n: 'η',
    o: 'θ',
    p: 'ρ',
    r: 'π',
    t: 'τ',
    u: 'μ',
    v: 'υ',
    w: 'ω',
    x: 'χ',
    y: 'γ',
  }

  for (let [key, value] of Object.entries(abc)) {
    str = str.replace(new RegExp(key, 'gi'), value)
  }

  return str.toLowerCase()
}
