'use strict'

const makeUnique = require('tfk-unique-array')
const isFile = require('is-file')

module.exports = (data) => {
  let roles = data ? data.roles : []
  let myShortcuts = []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  roles.forEach((item) => {
    const jsonPath = `../data/${item}.json`
    const filePath = `data/${item}.json`

    if (isFile(filePath)) {
      myShortcuts = myShortcuts.concat(require(jsonPath))
    }
  })

  return makeUnique(myShortcuts)
}
