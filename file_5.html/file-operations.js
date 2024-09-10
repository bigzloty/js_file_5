// file-operations.js
const fs = require('fs');

// Write to 'welcome.txt'
fs.writeFile('index.txt', 'Hello Node!', (err) => {
  if (err) throw err;
  console.log('index.txt has been created!');
});

// Read from 'hello.txt'
fs.readFile('index.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});