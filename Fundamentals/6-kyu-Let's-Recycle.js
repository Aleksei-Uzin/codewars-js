/**
 * Let's Recycle
 * https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
 *
 */

const recycle = arr => {
  const materials = ['paper', 'glass', 'organic', 'plastic']
  const bins = [[], [], [], []]

  for (let { type, material, secondMaterial } of arr) {
    const matInd = materials.indexOf(material)
    bins[matInd].push(type)

    if (secondMaterial) {
      const secMatInd = materials.indexOf(secondMaterial)
      bins[secMatInd].push(type)
    }
  }

  return bins
}
