const wildcard = require('wildcard')
const makeUnique = require('tfk-unique-array')
const shortcuts = require(`${__dirname}/data/shortcuts.json`)

function validateIp (options) {
  const { shortcut, myIp } = options
  const include = shortcut.includeIps && Array.isArray(shortcut.includeIps) ? shortcut.includeIps.filter(ip => wildcard(ip, myIp)).length > 0 : true
  const exclude = shortcut.excludeIps && Array.isArray(shortcut.excludeIps) ? shortcut.excludeIps.filter(ip => wildcard(ip, myIp)).length !== 0 : false

  return include === true && exclude === false
}

function ipFilter (options) {
  const shortcuts = options.shortcuts.map(shortcut => Object.assign(shortcut, { isValid: validateIp({ shortcut: shortcut, myIp: options.myIp }) }))
  return shortcuts.filter(shortcut => shortcut.isValid)
}

module.exports = data => {
  let roles = data ? data.roles : []
  let myIp = data ? data.myIp : false
  let myShortcuts = []

  roles = Array.isArray(roles) ? roles : roles.split('|')

  roles.forEach(item => {
    if (shortcuts.hasOwnProperty(item)) {
      myShortcuts = myShortcuts.concat(shortcuts[item])
    }
  })

  const finalRoles = makeUnique(myIp ? ipFilter({ shortcuts: myShortcuts, myIp: myIp }) : myShortcuts)
  return finalRoles
}
