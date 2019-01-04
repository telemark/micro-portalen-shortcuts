const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { parse } = require('url')
const { json, send } = require('micro')
const listAllShortcuts = require('./lib/list-all-shortcuts')
const filterShortcuts = require('./lib/filter-shortcuts')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  const results = Object.values(data).length > 0 ? filterShortcuts(data) : listAllShortcuts()

  if (!['/', '/view'].includes(pathname)) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  }
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers')
    response.end()
  } else if (pathname === '/shortcuts') {
    send(response, 200, results)
  } else if (pathname === '/view') {
    send(response, 200, renderPage(results))
  } else {
    const readme = readFileSync(`${__dirname}/README.md`, 'utf-8')
    send(response, 200, md.render(readme))
  }
}
