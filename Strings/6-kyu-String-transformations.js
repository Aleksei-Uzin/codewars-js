/**
 * String transformations
 * https://www.codewars.com/kata/6927680a91f3d91da9d2b16c/train/javascript
 *
 */

const stringTransformation = (str, transformations) => {
  const lastUppInd = transformations.lastIndexOf('U')
  const lastLowInd = transformations.lastIndexOf('L')
  const reverseCalc = transformations.filter(op => op === 'R').length
  const duplicateCalc = transformations.filter(op => op === 'D').length

  if (reverseCalc % 2) str = [...str].reverse().join('')
  if (duplicateCalc) str = str.replace(/./g, m => m.repeat(2 ** duplicateCalc))
  if (lastUppInd !== -1 || lastLowInd !== -1)
    str = lastUppInd > lastLowInd ? str.toUpperCase() : str.toLowerCase()

  return str
}
