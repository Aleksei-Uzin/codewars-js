/**
 * IP Validation
 * https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
 *
 */

const isValidIP = str => {
  const octets = str.split('.')

  if (octets.length !== 4) return false

  return octets.every(octet =>
    /^(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(octet)
  )
}
