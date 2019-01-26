let http = require('http')
let server = http.createServer((req,res)=>{
  console.log('request come:'+req.url)

  //允许跨域
  /*res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })*/
  res.end('Hello,Node.js 8887')
})
server.listen(8887,'127.0.0.1',()=>{
  console.log('服务器已经运行，请打开浏览，输入：http://127.0.0.1:8887/ 来访问')
})
