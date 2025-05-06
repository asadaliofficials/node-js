const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end()
  const myUrl = url.parse(req.url, true)
  const path = myUrl.pathname
  const search = myUrl.search
  const query = myUrl.query
  const log = `path: ${path}, search: ${search}\n`
  console.log(log)
  // console.log(query`\n`)
  console.log(`name: ${query.name}\n`)
  console.log(`age: ${query.age}\n`)
  console.log(`country: ${query.country}\n`)
  fs.appendFile('log.txt', log, (err) => {
    if (err) console.log(err)
  })
  console.log('server created')
  if (path === '/search') {
    res.end('search page')
  }
  else {
    res.end('404 page')
  }
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})