// server.js
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

// Listen on port 4000
server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});