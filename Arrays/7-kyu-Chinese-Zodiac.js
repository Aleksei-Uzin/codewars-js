/**
 * Chinese Zodiac
 * https://www.codewars.com/kata/57a73e697cb1f31dd70000d2/train/javascript
 *
 */

const chineseZodiac = year => {
  const animals = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Goat',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig',
  ]
  const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
  const animalInd = (year - 4) % 12
  const elementInd = ~~(((year - 4) % 10) / 2)
  return `${elements[elementInd]} ${animals[animalInd]}`
}
