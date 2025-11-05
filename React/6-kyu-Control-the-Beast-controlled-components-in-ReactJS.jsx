/**
 * Control the Beast (controlled components in ReactJS)
 * https://www.codewars.com/kata/5a831574373c2e48cf00000d/train/javascript
 *
 */

const React = require('react')

class Beast extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: props.name }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <input
        id="controlledName"
        value={this.state.name}
        onChange={this.handleChange}
      />
    )
  }
}

Beast.defaultProps = {
  name: 'Yeti',
}
