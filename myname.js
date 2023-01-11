const http = require('http');

const hostname = '127.0.01';
const port = 8080;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Henry Nwaokonko');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });