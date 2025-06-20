/**
 * IP Address to Number
 * https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/javascript
 *
 */

const ipToNum = ip => {
  const octets = ip.split('.')
  let binary = ''

  for (let octet of octets) {
    binary += parseInt(octet).toString(2).padStart(8, '0')
  }

  return parseInt(binary, 2)
}

const numToIp = num => {
  const binary = num.toString(2).padStart(32, '0')
  const octets = binary.match(/\d{8}/g)
  let ip = []

  for (let octet of octets) {
    ip.push(parseInt(octet, 2))
  }

  return ip.join('.')
}
