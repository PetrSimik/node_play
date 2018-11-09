//core modules http, fs,..

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); //hard exit of program
});

server.listen(3000);
