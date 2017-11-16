const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;


// const retrieveIndex = (res) => fs.readFile('index.html', function (err, data) {
//     res.write(data);
//     res.end();
// });

// const retrievePage2 = (res) => fs.readFile('page2.html', function (err, data) {
//     res.write(data);
//     res.end();
// });

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html' });
    if (req.url = '?name=') {
        res.write('please provide a name');
        res.end();
    } else (req.url === `?name= ${name}`); {
        res.write('Hello')
        res.end()
    }
    
})
server.listen(port);