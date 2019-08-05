const listAllShortcuts = require('./lib/list-all-shortcuts')
const filterShortcuts = require('./lib/filter-shortcuts')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const pathname = request.url
  const data = request.method === 'POST' ? await request.body : await request.query
  let results = []
  if (data && Object.values(data).length > 0) {
    results = filterShortcuts(data)
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
  } else if (pathname.includes('/shortcuts')) {
    console.log('returnerer snarveger')
    response.json(results)
  } else if (pathname.includes('/view')) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.send(renderPage(results))
  }
}
