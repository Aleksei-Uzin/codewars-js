/**
 * Unicode Madness: 東方名確認　～ Eastern Title Validator.
 * https://www.codewars.com/kata/591837f2e76dc9be4b000024/train/javascript
 *
 */

const isTouhouTitle = title => {
  let [jpn = '', eng = ''] = title.split('　～ ')
  let words = ''

  eng = eng.replace(
    /\b(a|an|the|of|in|at|to|and)[\s\.]/gi,
    m => ((words += m), ''),
  )

  if (/[A-Z]/.test(words)) return false

  const isJpnTitleCorrect = /^\u6771\u65b9[\u4E00-\u9FFF]{3}$/.test(jpn)
  const isEngTitleCorrect = /^(\b[A-Z][a-z]*[\s\.])+$/.test(eng)

  return isJpnTitleCorrect && isEngTitleCorrect
}
