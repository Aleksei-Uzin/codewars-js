/**
 * Expressive Objects
 * https://www.codewars.com/kata/560cd60f215a80dc00000049/train/javascript
 *
 */

const evaluate = (left, op, right) =>
  calcOp(op, [calcObj(left), calcObj(right)])

const calcObj = (obj, op = '', arr = []) => {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      const i = ['add', 'subtract', 'multiply', 'divide'].indexOf(key)
      arr[i] = calcOp(key, obj[key])
    } else {
      return calcObj(obj[key], key)
    }
  }

  return calcOp(op, arr)
}

const calcOp = (op, arr) => {
  switch (op) {
    case 'add':
      return arr.reduce((acc, n) => acc + n)
    case 'subtract':
      return arr.reduce((acc, n) => acc - n)
    case 'multiply':
      return arr.reduce((acc, n) => acc * n)
    case 'divide':
      return arr.reduce((acc, n) => acc / n)
  }
}
