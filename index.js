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
    const pathName = req.url;

    if(pathName ==='/' || pathName === '/overview'){
        res.end('Thi  is the OVERVIEW');
    }
    else if(pathName === '/product'){
        res.end('This is the PRODUCT');
    }else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to reqeusts on port 8000');
});
