/**
 * Creating Elements with React
 * https://www.codewars.com/kata/55aac03755b0264947000138/train/javascript
 *
 */

const React = require('react')

function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content)
}

function createUnorderedList(list) {
  const listItems = list.map(item => createElement(item, 'li', { key: item }))

  return createElement(listItems, 'ul')
}
