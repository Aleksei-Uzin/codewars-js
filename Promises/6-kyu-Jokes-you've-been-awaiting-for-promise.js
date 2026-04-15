/**
 * Jokes you've been 'awaiting' for ... promise
 * https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
 *
 */

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl)
  const { jokes } = await response.json()

  if (!jokes) throw new Error(`No jokes at url: ${apiUrl}`)

  const joke = jokes.find(({ id }) => id === jokeId)

  if (!joke) throw new Error(`No jokes found id: ${jokeId}`)

  return {
    saySetup() {
      return joke.setup
    },
    sayPunchLine() {
      return joke.punchLine
    },
  }
}
