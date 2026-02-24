/**
 * Circular List
 * https://www.codewars.com/kata/5b2e60742ae7543f9d00005d/train/javascript
 *
 */

class CircularList {
  constructor(...args) {
    if (args.length === 0) {
      throw new Error('CircularList cannot be empty')
    }
    this.list = args
    this.index = -1
  }

  next() {
    this.index = this.index + 1 < this.list.length ? this.index + 1 : 0
    return this.list[this.index]
  }

  prev() {
    this.index = this.index - 1 >= 0 ? this.index - 1 : this.list.length - 1
    return this.list[this.index]
  }
}
