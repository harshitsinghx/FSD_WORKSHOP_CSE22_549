const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('This is my first page');
    res.write('This is my second page\n');
    res.write('This is my third page\n');
    res.end('This is my page');
});
server.listen(4000, ()=> console.log('Server running at http://localhost:4000'));