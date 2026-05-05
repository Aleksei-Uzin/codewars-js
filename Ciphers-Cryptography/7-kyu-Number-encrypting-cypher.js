/**
 * Number encrypting: cypher
 * https://www.codewars.com/kata/57aa3927e298a757820000a8/train/javascript
 *
 */

const cypher = str => {
  const setUpper = { I: 1, R: 2, E: 3, A: 4, S: 5, G: 6, T: 7, B: 8, O: 0 }
  const setLower = { l: 1, z: 2, e: 3, a: 4, s: 5, b: 6, t: 7, g: 9, o: 0 }

  return str.replace(/[IREASGTBO]/g, m => setUpper[m]).replace(/[lzeasbtgo]/g, m => setLower[m])
}
