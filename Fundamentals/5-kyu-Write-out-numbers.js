/**
 * Write out numbers
 * https://www.codewars.com/kata/52724507b149fa120600031d/train/javascript
 *
 */

const number2words = n => {
  const fromZeroToNineteen = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]

  if (n < 20) {
    return fromZeroToNineteen[n]
  }

  const res = []
  const thousandsCalc = ~~(n / 1000)
  n -= thousandsCalc * 1000

  if (thousandsCalc > 0) {
    res.push(`${number2words(thousandsCalc)} thousand`)
  }

  const hundredCalc = ~~(n / 100)
  n -= hundredCalc * 100

  if (hundredCalc > 0) {
    res.push(`${number2words(hundredCalc)} hundred`)
  }

  if (n > 0 && n < 20) {
    res.push(`${fromZeroToNineteen[n]}`)
  } else {
    const tensCalc = ~~(n / 10)
    const digitCalc = n - tensCalc * 10
    const digits = digitCalc > 0 ? fromZeroToNineteen[digitCalc] : ''

    if (tensCalc > 0) {
      res.push(
        digits ? `${tens[tensCalc - 2]}-${digits}` : `${tens[tensCalc - 2]}`
      )
    }
  }

  return res.join(' ')
}

/**
 * Best Practice
 */
function number2words(n) {
  var b = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  var b2 = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ]
  if (n >= 0 && n < 20) {
    return b[n]
  }
  if (n >= 20 && n < 100) {
    return b2[Math.floor(n / 10) - 2] + (n % 10 === 0 ? '' : '-' + b[n % 10])
  }
  if (n >= 100 && n < 1000) {
    return (
      b[Math.floor(n / 100)] +
      ' hundred' +
      (n % 100 === 0 ? '' : ' ' + number2words(n % 100))
    )
  } else {
    return (
      number2words(Math.floor(n / 1000)) +
      ' thousand' +
      (n % 1000 === 0 ? '' : ' ' + number2words(n % 1000))
    )
  }
}
