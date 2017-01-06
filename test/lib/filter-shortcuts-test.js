'use strict'

const tap = require('tap')
const buildMyShortcuts = require('../../lib/filter-shortcuts')
const alle = require('../../data/alle.json')
const administrasjonen = require('../../data/administrasjonen.json')
const skole = require('../../data/skole.json')
const tannhelse = require('../../data/tannhelse.json')
const tullefant = []

tap.equal(JSON.stringify(alle), JSON.stringify(buildMyShortcuts({roles: 'alle'})), 'It returns alle correct')

tap.equal(JSON.stringify(administrasjonen), JSON.stringify(buildMyShortcuts({roles: 'administrasjonen'})), 'It returns administrasjonen correct')

tap.equal(JSON.stringify(skole), JSON.stringify(buildMyShortcuts({roles: 'skole'})), 'It returns skole correct')

tap.equal(JSON.stringify(tannhelse), JSON.stringify(buildMyShortcuts({roles: ['tannhelse']})), 'It returns tannhelse correct')

tap.equal(JSON.stringify(tullefant), JSON.stringify(buildMyShortcuts({roles: ['tullefant']})), 'It returns tullefant correct')

tap.equal(JSON.stringify([]), JSON.stringify(buildMyShortcuts()), 'It returns empty correct')
