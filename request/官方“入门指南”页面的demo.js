const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <button onclick="buttonA()">buttonA</button>
        <button onclick="buttonB()">buttonB</button>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
