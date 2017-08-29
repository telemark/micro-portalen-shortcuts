'use strict'

const wildcard = require('wildcard')
const makeUnique = require('tfk-unique-array')
const isFile = require('is-file')

function ipFilter (options) {
  const shortcuts = options.shortcuts.map(shortcut => shortcut.ips && Array.isArray(shortcut.ips) ? Object.assign(shortcut, {isValid: shortcut.ips.filter(ip => wildcard(ip, options.myIp)).length > 0}) : Object.assign(shortcut, {isValid: true}))
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

  return makeUnique(myIp ? ipFilter({shortcuts: myShortcuts, myIp: myIp}) : myShortcuts)
}
