const makeUnique = require('tfk-unique-array')

module.exports = () => {
  const jsonPath = `${__dirname}/data/shortcuts.json`
  const shortcuts = require(jsonPath)
  const allShortcuts = Object.values(shortcuts).reduce((prev, curr) => {
    prev = prev.concat(curr)
    return prev
  }, [])

  return makeUnique(allShortcuts)
}
