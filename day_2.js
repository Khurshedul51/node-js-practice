// http modules
// HTTP Methods:
//      GET: Retrieves a resource from the server
//      POST: Inserts a resource in the server
//      PUT: Updates an existing resource in the server
//      DELETE: Deletes a resource from the server


/*
const http = require('http')

// create a server
const server = http.createServer((request, response) => {
    if(request.url == '/') {
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h1>home page</h1>`);
        response.end();
    }
    else if(request.url == '/about') {
        response.writeHead(200, {'content-type': 'text-html'});
        response.write(`<h1>about page</h1>`);
        response.end();
    }
    else if(request.url == '/contact') {
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h1>contact page</h1>`);
        response.end();
    }
    else {
        response.writeHead(404, {'content-type': 'text-html'})
        response.write(`<h1>404-not found!<a href='/'>go back to home</a></h1>`);
        response.end();
    }
});
*/

/*
// listening server to a specific port
server.listen(4000, () => {
    console.log('server listening at port 4000')
});
*/

const http = require('http');
const fs = require('fs');

// Get the contents of the HTML files
const homepage = fs.readFileSync('./myFolder/homepage.html');
const about = fs.readFileSync('./myFolder/about.html');
const errorPage = fs.readFileSync('./myFolder/errorpage.html');
const styleFile = fs.readFileSync('./myFolder/style.css');

// server handler
const handler = (req, res) => {
    console.log(req.url);
    if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homepage);
        res.end();
    }
    else if(req.url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(styleFile);
        res.end();
    }
    else if(req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(about);
        res.end();
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(errorPage);
        res.end();
    }
}
// create server
const server = http.createServer(handler);
// listening the server
server.listen(4001, () => {
    console.log('server listening at port 4001');
})