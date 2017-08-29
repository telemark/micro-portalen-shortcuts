'use strict'

const wildcard = require('wildcard')
const makeUnique = require('tfk-unique-array')
const isFile = require('is-file')

function ipFilter (data) {
  const shortcuts = data.shortcuts.map(shortcut => shortcut.ips ? Object.assign(shortcut, {isValid: wildcard(data.myIp, shortcut.ips).length > 0}) : Object.assign(shortcut, {ips: [], isValid: true}))
  console.log(shortcuts)
  return shortcuts.filter(shortcut => shortcut.isValid)
}

module.exports = (data) => {
  let roles = data ? data.roles : []
  let myIp = data ? data.myIp : false
  let myShortcuts = []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  roles.forEach((item) => {
    const jsonPath = `../data/${item}.json`
    const filePath = `data/${item}.json`

    if (isFile(filePath)) {
      myShortcuts = myShortcuts.concat(require(jsonPath))
    }
  })

  if (myIp) {
    myShortcuts = ipFilter({shortcuts: myShortcuts, myIp: myIp})
  }
  return makeUnique(myShortcuts)
}
