const fs = require('fs');

fs.readFile('./txt/test1.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Will read file!');