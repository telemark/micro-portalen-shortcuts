const fs = require('fs')
const makeUnique = require('tfk-unique-array')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  const files = fs.readdirSync('data').filter(isJson)
  let shortcuts = []

  files.forEach((file) => {
    const jsonPath = `../data/${file}`
    shortcuts = shortcuts.concat(require(jsonPath))
  })

  return makeUnique(shortcuts)
}
