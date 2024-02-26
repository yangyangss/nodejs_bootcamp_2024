const fs = require('fs');
const http = require('http');


////////////////////////
/// File
////////////////////////

// fs.readFile('./txt/test1.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('Will read file!');


////////////////////////
///SERVER
////////////////////////
const server = http.createServer((req, res) => {    
    res.end('Hello from the server');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to reqeusts on port 8000');
});
