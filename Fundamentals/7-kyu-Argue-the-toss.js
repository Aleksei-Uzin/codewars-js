/**
 * Argue the toss
 * https://www.codewars.com/kata/5758a91bbd1fdd2033000947/train/javascript
 *
 */

const anArgument = (...args) => {
  if (!args.length) return "You didn't give me any arguments."

  const len = args.length
  const list = args
    .map((item, i) => {
      if (len === 1) return `"${item}".`
      else if (i === len - 1) return `and "${item}".`
      else if (i === len - 2) return `"${item}" `
      else return `"${item}", `
    })
    .join('')

  return `You gave me ${len} argument${len > 1 ? 's' : ''} and ${len > 1 ? 'they are' : 'it is'} ${list}`
}
