const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    const date = getFormattedDate()
    const log = `${date}, ${req.socket.remoteAddress}, ${req.url}\n`
    fs.appendFile('log.txt', log, (err) => {
      if (!err) {
        console.log('log written')
      }
    })
  }

  const url = req.url
  if (url === '/') {
    res.end('welcome to home page')

  }
  else if (url === '/about') {
    res.end('welcome to about page')
  }
  else {
    res.end('404 not found')
  }

})
function getFormattedDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // months are 0-indexed, so add 1
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

server.listen(8000, () => {
  console.log('server is listening on port 8000')
})

