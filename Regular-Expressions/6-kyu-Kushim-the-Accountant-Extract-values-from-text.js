/**
 * Kushim the Accountant: Extract $ values from text
 * https://www.codewars.com/kata/58b20418e39e2ad9ae000150/train/javascript
 *
 */

const sumAccounts = text =>
  (text.match(/\-?\$\d+/g) || []).reduce(
    (acc, val) => acc + parseInt(val.replace('$', '')),
    0
  )
