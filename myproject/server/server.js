let http = require('http')
let fs = require('fs')
let server = http.createServer((req, res) => {
  console.log('request come:' + req.url)

  let html = fs.readFileSync('test.html', 'utf-8')
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(html)
})
server.listen(8888, '127.0.0.1', () => {
  console.log('服务器已经运行，请打开浏览，输入：http://127.0.0.1:8888/ 来访问')
})
