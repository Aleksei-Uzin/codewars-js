/**
 * Basic JS - Calculating averages
 * https://www.codewars.com/kata/529f32794a6db5d32a00071f/train/javascript
 *
 */

const Calculator = {
  average(...args) {
    if (args.length === 0) return 0

    const sum = args.reduce((acc, n) => acc + n, 0)
    return sum / args.length
  },
}

// Old-fashioned solution
var Calculator_ = {
  average: function () {
    var len = arguments.length
    var sum = 0

    if (len === 0) return 0

    Array.prototype.forEach.call(arguments, function (n) {
      sum += n
    })

    return sum / len
  },
}
