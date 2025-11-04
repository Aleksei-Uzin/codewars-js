/**
 * Fifa 17 Launch
 * https://www.codewars.com/kata/57ed6361e77282ee9300019f/train/javascript
 *
 */

const reducer = (bet, n1, n2) => {
  if (/home/i.test(bet)) {
    return n1 > n2
  } else if (/away/i.test(bet)) {
    return n1 < n2
  } else {
    return n1 === n2
  }
}

const fifa = (ticket, results) => {
  const ticketsArr = Object.entries(ticket)
  const sum = ticketsArr.reduce((acc, [bet, val], i) => {
    const [n1, n2] = results[i].split('-')
    return reducer(bet, n1, n2) ? acc + parseInt(val.slice(1)) : acc
  }, 0)

  return `£${sum}`
}
