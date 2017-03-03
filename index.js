'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const listAllShortcuts = require('./lib/list-all-shortcuts')
const filterShortcuts = require('./lib/filter-shortcuts')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  const results = Object.values(data).length > 0 ? filterShortcuts(data) : listAllShortcuts()

  if (pathname === '/shortcuts') {
    response.setHeader('Access-Control-Allow-Origin', '*')
    send(response, 200, results)
  } else if (pathname === '/view') {
    send(response, 200, renderPage(results))
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
