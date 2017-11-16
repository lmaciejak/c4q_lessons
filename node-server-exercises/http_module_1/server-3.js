// const http = require('http');
// const html = require('./index.js')
// const port = 3000; 
// //var template= require('./template.js')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(template());
//     res.write(html);
//     res.end();

// //   res.write(template.template())
// //   fs.readFile('template.js', function(err, data) {
// //     res.writeHead(200, {'Content-Type': 'text/html'});
// //     res.write(data);
// //     res.end();
// //   });
// })
// server.listen(port, () => { 
//    console.log(`listening on port $`) ;



var http = require('http');
var fs = require('fs');
var template= require('./template.js')
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(template());
    res.write(data);
    res.end();
  });
//   res.write(template.template())
//   fs.readFile('template.js', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
}).listen(3000);

