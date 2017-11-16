const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;


const retrieveIndex = (res) => fs.readFile('index.html', function (err, data) {
    res.write(data);
    res.end();
});

const retrievePage2 = (res) => fs.readFile('page2.html', function (err, data) {
    res.write(data);
    res.end();
});

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html' });
    if (req.url === '/') {
        console.log(req.url)
        retrieveIndex(res)
    } else if (req.url === '/page-2') {
        console.log(req.url)
        retrievePage2(res)
    } else {
        res.write('page not found')
        res.end()
    }
    //res.write(data);
    //res.end();

    
})
server.listen(port);