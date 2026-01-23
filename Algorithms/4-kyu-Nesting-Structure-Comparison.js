/**
 * Nesting Structure Comparison
 * https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
 *
 */

// The isArray function is already defined
Array.prototype.sameStructureAs = function (other) {
  if (this.length !== other.length) return false

  for (let i = 0; i < this.length; i++) {
    if (isArray(this[i])) {
      return this[i].sameStructureAs(other[i])
    } else if (isArray(this[i]) !== isArray(other[i])) {
      return false
    }
  }

  return true
}
