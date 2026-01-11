/**
 * Would you believe... Talk like Siegfried
 * https://www.codewars.com/kata/57fd6c4fa5372ead1f0004aa/train/javascript
 *
 */

const siegfried = (week, str, curr = 1) => {
  if (curr > week) return str

  if (curr === 1) {
    str = str
      .replace(/c(?=[ie])/gi, m => matchCase(m, 's'))
      .replace(/c(?=[^ieh])/gi, m => matchCase(m, 'k'))
  }

  if (curr === 2) {
    str = str.replace(/ph/gi, m => matchCase(m, 'f'))
  }

  if (curr === 3) {
    str = str
      .replace(/(?<=\w{3,})e\b/gi, '')
      .replace(/([a-z])\1/gi, (_, m) => m)
  }

  if (curr === 4) {
    str = str
      .replace(/th/gi, m => matchCase(m, 'z'))
      .replace(/wr/gi, m => matchCase(m, 'r'))
      .replace(/wh?/gi, m => matchCase(m, 'v'))
  }

  if (curr === 5) {
    str = str
      .replace(/ou/gi, m => matchCase(m, 'u'))
      .replace(/an/gi, m => matchCase(m, 'un'))
      .replace(/ing\b/gi, 'ink')
      .replace(/\bsm/gi, m => matchCase(m, 'schm'))
  }

  return siegfried(week, str, curr + 1)
}

const matchCase = (prev, next) =>
  prev !== prev.toLowerCase()
    ? next[0].toUpperCase().concat(next.slice(1))
    : next
