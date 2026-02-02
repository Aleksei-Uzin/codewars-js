/**
 * Makes the Sentence
 * https://www.codewars.com/kata/59fb4d89ff58e5e816002efc/train/javascript
 *
 */

const makesTheSentence = (characterArr, sentenceStr) => {
  sentenceStr = sentenceStr.replace(/\s/g, '')

  if (characterArr.length !== sentenceStr.length) return false

  const reminder = characterArr.reduce(
    (acc, c) => acc.replace(c, ''),
    sentenceStr,
  )

  return !reminder.length
}
