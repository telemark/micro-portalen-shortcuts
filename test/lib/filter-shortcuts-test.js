const test = require('ava')
const buildMyShortcuts = require('../../lib/filter-shortcuts')
const shortcuts = require('../../data/shortcuts.json')
const alle = shortcuts.alle
const administrasjonen = shortcuts.administrasjonen
const skole = shortcuts.skole
const tannhelse = shortcuts.tannhelse
const tullefant = []

test('It generates expected shortcuts', t => {
  t.deepEqual(alle, buildMyShortcuts({ roles: 'alle' }), 'It returns alle correct')

  t.deepEqual(administrasjonen, buildMyShortcuts({ roles: 'administrasjonen' }), 'It returns administrasjonen correct')

  t.deepEqual(skole, buildMyShortcuts({ roles: 'skole' }), 'It returns skole correct')

  t.deepEqual(tannhelse, buildMyShortcuts({ roles: ['tannhelse'] }), 'It returns tannhelse correct')

  t.deepEqual(tullefant, buildMyShortcuts({ roles: ['tullefant'] }), 'It returns tullefant correct')

  t.deepEqual([], buildMyShortcuts(), 'It returns empty correct')
})
