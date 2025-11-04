/**
 * React Fun #1: Component types and nesting
 * https://www.codewars.com/kata/595b9b85ff19c2bd35000013/train/javascript
 *
 */

const React = require('react')

const Hello = () => <h1>Hello</h1>
const World = () => <h2>World!</h2>

class Greet extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    )
  }
}
