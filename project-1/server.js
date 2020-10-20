const http = require('http');
const fs = require('fs');

// create server
const server = http.createServer((req, res) => {

    // checking urls then sending the required response
    if(req.url === '/' || req.url === '/index') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/index.html', 'utf8').pipe(res)
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/about.html', 'utf8').pipe(res)
    } else if(req.url === '/services') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/services.html', 'utf8').pipe(res)
    } else if(req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/pages/contact.html', 'utf8').pipe(res)
    }
    
})

// node listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Node is listening on port 3000');