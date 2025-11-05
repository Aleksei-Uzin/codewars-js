/**
 * Unshackle the Beast (uncontrolled components in ReactJS)
 * https://www.codewars.com/kata/5a9fb5147c7a53e6c30000d0/train/javascript
 *
 */

const React = require('react')

class BeastForm extends React.Component {
  constructor(props) {
    super(props)
    this.beastToRelease = { value: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    unshackle(this.beastToRelease.value)
  }

  render() {
    return (
      <form id="beastForm" onSubmit={this.handleSubmit}>
        <input id="beastToRelease" />
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    )
  }
}
