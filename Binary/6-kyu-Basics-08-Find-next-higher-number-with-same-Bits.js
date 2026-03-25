/**
 * Basics 08: Find next higher number with same Bits (1's)
 * https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript
 *
 */

const nextHigher = n => {
  const lowestBit = n & -n
  const leftPart = n + lowestBit
  const shiftedBits = n ^ leftPart
  const rightPart = (shiftedBits / lowestBit) >> 2

  return leftPart | rightPart
}
