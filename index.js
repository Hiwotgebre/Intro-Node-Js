console.log("Hello World");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n')
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })


const server2 = http.createServer((req2, res2) => {
    res2.statusCode = 200;
    res2.setHeader('Content-Type', 'text/html');
    res2.write('<h1 style="color: red">Hello World!</h1>');
    res2.write('<p>I wonder what else we can send... may be we can say IT IS FRIDAY!!! YAY</p>');
    res2.end('Hello World!\n');
});

server2.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})