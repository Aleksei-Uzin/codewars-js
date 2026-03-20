/**
 * T.T.T.25: Tree and vine
 * https://www.codewars.com/kata/57aa89327cb1f34d5300003c/train/javascript
 *
 * https://www.vcalc.com/wiki/helix-length
 * https://youtu.be/Ce64D_yGDvY?si=yJWisloCnlNhbPcp
 *
 */

/**
 * The circumference:
 *  C=2piR
 *
 * The total horizontal distance:
 *  W= n * C = n(2piR)
 *
 * The total vertical distance:
 *  H
 *
 * The shortest path between the start and end points on this flattened surface is a straight line,
 * which forms the hypotenuse of a right-angled triangle.
 * Pythagorean theorem:
 *
 *  L^2 = H^2 + W^2
 *
 *  L = sqrt(H^2 + (n * 2piR)^2)
 *
 */

// TODO:

function lengthOfVine(n, height, radius) {
  return Math.sqrt(height ** 2 + (2 * n * Math.PI * radius) ** 2)
}
