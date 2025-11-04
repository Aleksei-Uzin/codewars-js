/**
 * React with JSX
 * https://www.codewars.com/kata/55b6dd6282cc7ceadb000131/train/javascript
 *
 */

const React = require('react')

// Mantain this format:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
const myHeader = (
  <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
)

const CodewarsLink = React.createClass({
  render() {
    const { user } = this.props
    const url = `http://www.codewars.com/users/${user}`

    return <a href={url}>{user}</a>
  },
})

const Leaderboard = React.createClass({
  render: function () {
    const { leaders } = this.props
    const linksToLeaders = leaders.map(leader => (
      <CodewarsLink key={leader} user={leader} />
    ))

    return <div>{linksToLeaders}</div>
  },
})
