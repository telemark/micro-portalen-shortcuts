const makeUnique = require('tfk-unique-array')
const shortcuts = require('../data/shortcuts.json')

module.exports = () => {
  const allShortcuts = Object.values(shortcuts).reduce((prev, curr) => {
    prev = prev.concat(curr)
    return prev
  }, [])

  return makeUnique(allShortcuts)
}
