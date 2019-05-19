const { parse } = require('url')
const { json, send } = require('micro')
const listAllShortcuts = require('./lib/list-all-shortcuts')
const filterShortcuts = require('./lib/filter-shortcuts')
const renderPage = require('./lib/render-page')
let cache = {}

module.exports = async (request, response) => {
  const { pathname, query } = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  let results = []
  if (Object.values(data).length > 0) {
    const cached = cache[data.roles]
    if (!cached) {
      const shortcuts = filterShortcuts(data)
      results = shortcuts
      cache[data.roles] = shortcuts
    } else {
      results = cached
    }
  } else {
    results = listAllShortcuts()
  }

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
  }
}
