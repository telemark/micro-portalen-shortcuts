'use strict'

module.exports = (results) => {
  const shortcuts = results
    .map((site) => {
      return `<div><h2>${site.title}</h2><div>${site.description}</div><div><a href="${site.url}" target="_blank">${site.url}</a></div></div>`
    })

  return `<html><body style="text-align: center"><h1>Fagsystemer</h1>${shortcuts.join('')}</body></html>`
}
